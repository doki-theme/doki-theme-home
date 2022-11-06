import type { DokiThemeLite } from "$lib/Types";

// Themed logo stuffs

/*The Logo in SVG format*/
const buildSVG = (dokiTheme: DokiThemeLite, {width, height}) =>
`<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 24 24"><g><rect x="1.48" y="7.07" width="23.04" height="9.87" rx="2.3" ry="2.3" transform="translate(-4.68 12.71) rotate(-45)" fill="${dokiTheme.a}"/><rect x="6.06" y=".48" width="9.87" height="23.04" rx="2.3" ry="2.3" transform="translate(-5.27 11.29) rotate(-45)" fill="${dokiTheme.a}"/><rect x="7.07" y="8.07" width="9.87" height="9.87" rx="1.65" ry="1.65" transform="translate(12.71 -4.68) rotate(45)" fill="${dokiTheme.b}"/></g><path d="M12.01,11.73c.14-.08,.63-.4,1.33-.56,1.63-.37,2.26,1.43,1.3,2.78-.86,.99-1.75,1.44-2.63,2.02-.88-.58-1.77-1.04-2.63-2.02-.96-1.36-.33-3.15,1.3-2.78,.71,.16,1.19,.48,1.33,.56" fill="${dokiTheme.a}"/></svg>`


/*Add svg to main document, to create
  image blob, then remove it*/
const svgUrlToPng = (svgUrl, options, callback) => {
  const svgImage = document.createElement('img');
  document.body.appendChild(svgImage);
  svgImage.onload = function () {
    const canvas = document.createElement('canvas');
    canvas.width = options.width;
    canvas.height = options.height;
    const canvasCtx = canvas.getContext('2d');
    canvasCtx.drawImage(svgImage, 0, 0);
    const imgData =
      options.useCanvasData ?
        canvasCtx.getImageData(0, 0, options.width, options.height) :
        canvas.toDataURL('image/png');
    callback(imgData);
    svgImage.remove();
  };
  svgImage.src = svgUrl;
};

/*Retrieve logo blob url*/
const getSvgUrl = svg =>
  URL.createObjectURL(new Blob([svg], {type: 'image/svg+xml'}));

const svgToPng = (svg, options, callback) => {
  const url = getSvgUrl(svg);
  svgUrlToPng(url, options, (imgData) => {
    callback(imgData);
    URL.revokeObjectURL(url);
  });
};

export const themeFavicon = (dokiTheme: DokiThemeLite) => {
	const faviconOptions = {width: 32, height: 32};
  const faviconSVG = buildSVG(dokiTheme, faviconOptions);
  console.log(faviconSVG);
  
  svgToPng(faviconSVG, faviconOptions, (imgData) => {
    let faviconLink: HTMLLinkElement = document.querySelector("link[rel~='icon']");
    if (!faviconLink) {
      faviconLink = document.createElement('link');
      faviconLink.rel = 'icon';
      document.head.appendChild(faviconLink);
    }
    faviconLink.href = imgData;
  });
}
