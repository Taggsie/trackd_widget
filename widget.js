var $zoho = $zoho || {};
$zoho.salesiq = $zoho.salesiq || {
    values: {},
    widgetcode: 'siqecba2aa9e3f9d84f8bae3909a8bd0e08b4a5c158472fb2bb3c8a644eac7fde94'
};

// Include the SalesIQ widget script
var script = document.createElement('script');
script.src = 'https://salesiq.zohopublic.com/widget?widgetcode=siqecba2aa9e3f9d84f8bae3909a8bd0e08b4a5c158472fb2bb3c8a644eac7fde94';
document.head.appendChild(script);
