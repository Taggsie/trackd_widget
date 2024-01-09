var $zoho = $zoho || {};
$zoho.salesiq = $zoho.salesiq || {
    values: {},
    widgetcode: 'siqecba2aa9e3f9d84f8bae3909a8bd0e08d1b086d6dc02445a7a8b478985e59181'
};

// Include the SalesIQ widget script
var script = document.createElement('script');
script.src = 'https://salesiq.zohopublic.com/widget?widgetcode=siqecba2aa9e3f9d84f8bae3909a8bd0e08d1b086d6dc02445a7a8b478985e59181';
document.head.appendChild(script);
