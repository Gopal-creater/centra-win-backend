function orderTemplate({ data }) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
        <style>
            body { font-family: Arial, sans-serif; }
            .container { width: 100%; max-width: 600px; margin: 0 auto; padding: 20px; }
            .row { display: flex; margin-bottom: 20px; }
            .column { width: 50%; padding: 0 10px; }
            .bold { font-weight: bold; }
            .center { text-align: center; }
            .section-title { margin-top: 20px; font-size: 18px; font-weight: bold; }
        </style>
    </head>
    <body>
        <div class="container">
            <p style="padding: 20px;">Dear Meng, Vhaibab,</p>
            <p style="padding: 20px;">Thank you for order. Here are your details:</p>

            <p class="section-title">Customer Information</p>

            <div class="row">
                <div class="column">
                    <p class="bold">Customer Number</p>
                    <p>${data.customerNumber}</p>
                </div>
                <div class="column">
                    <p class="bold">Work Order #</p>
                    <p>${data.workOrder}</p>
                </div>
            </div>

            <div class="row">
                <div class="column">
                    <p class="bold">Customer Name</p>
                    <p>${data.customerName}</p>
                </div>
                <div class="column">
                    <p class="bold">Street Address</p>
                    <p>${data.streetAddress}</p>
                </div>
            </div>

            <div class="row">
                <div class="column">
                    <p class="bold">Email</p>
                    <p>${data.email}</p>
                </div>
                <div class="column">
                    <p class="bold">Phone Number</p>
                    <p>${data.phoneNumber}</p>
                </div>
            </div>

            <div class="row">
                <div class="column">
                    <p class="bold">City</p>
                    <p>${data.city}</p>
                </div>
                <div class="column">
                    <p class="bold">Province</p>
                    <p>${data.province}</p>
                </div>
            </div>

            <div class="row">
                <div class="column">
                    <p class="bold">Postal Code</p>
                    <p>${data.postalCode}</p>
                </div>
            </div>

            <p class="section-title">Order Information</p>

            <div class="row">
                <div class="column">
                    <p class="bold">Branch</p>
                    <p>${data.branch}</p>
                </div>
                <div class="column">
                    <p class="bold">Order Type</p>
                    <p>${data.orderType}</p>
                </div>
            </div>

            <div class="row">
                <div class="column">
                    <p class="bold">Home Depot Order</p>
                    <p>${data.homeDepotOrder}</p>
                </div>
                <div class="column">
                    <p class="bold">Lead Source</p>
                    <p>${data.leadSource}</p>
                </div>
            </div>

            <div class="row">
                <div class="column">
                    <p class="bold">Estimator</p>
                    <p>${data.estimator}</p>
                </div>
                <div class="column">
                    <p class="bold">Marketer</p>
                    <p>${data.marketer}</p>
                </div>
            </div>

            <p class="section-title">Order Details</p>

            <div class="row">
                <div class="column">
                    <p class="bold">Windows</p>
                    <p>${data.windows}</p>
                </div>
                <div class="column">
                    <p class="bold">Patio Doors</p>
                    <p>${data.patioDoors}</p>
                </div>
            </div>

            <div class="row">
                <div class="column">
                    <p class="bold">Sealed Units</p>
                    <p>${data.sealedUnits}</p>
                </div>
                <div class="column">
                    <p class="bold">Others</p>
                    <p>${data.others}</p>
                </div>
            </div>

            <div class="row">
                <div class="column">
                    <p class="bold">Submitter Email</p>
                    <p>${data.submitterEmail}</p>
                </div>
                <div class="column">
                    <p class="bold">CleanBCIQPCode</p>
                    <p>${data.cleanBCIQPCode}</p>
                </div>
            </div>

            <div class="row">
                <div class="column">
                    <p class="bold">Doors</p>
                    <p>${data.doors}</p>
                </div>
                <div class="column">
                    <p class="bold">Future Opportunity</p>
                    <p>${data.futureOpportunity}</p>
                </div>
            </div>

            <div class="row">
                <div class="column">
                    <p class="bold">Alteration Drawing</p>
                    <p>${data.alterationDrawing}</p>
                </div>
            </div>

            <p style="padding: 20px;" class="center">&copy; 2025 Your Company Name. All rights reserved.</p>
        </div>
    </body>
    </html>
  `;
}

module.exports = orderTemplate;
