const stripe = require('../config/stripe');

exports.createPaymentIntent = async (req, res, next) => {
    try {
        const { amount, currency } = req.body;

        const paymentIntent = await stripe.paymentIntents.create({
            amount, // Amount in cents
            currency, // e.g., 'usd'
            payment_method_types: ['card'],
        });

        res.status(200).json({ clientSecret: paymentIntent.client_secret });
    } catch (error) {
        next(error);
    }
};
