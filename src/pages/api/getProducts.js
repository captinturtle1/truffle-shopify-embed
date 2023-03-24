import Client from 'shopify-buy';

export default function handler(req, res) {
    return new Promise((resolve, reject) => {
        if (req.method === 'POST') {
            try {
                const client = Client.buildClient({
                    domain: process.env.domain,
                    storefrontAccessToken: process.env.storefrontAccessToken
                });
            
                client.product.fetchAll().then((fetchedProducts) => {
                    // Do something with the products
                    res.status(200).json({ fetchedProducts });
                    resolve();
                });
            } catch(err) {
                res.status(500).json({ error: '500 Internal Server Error'});
                reject();
            }
        } else {
            res.status(400).json({ error: '400 Bad Request'});
            reject();
        }
    });
}


