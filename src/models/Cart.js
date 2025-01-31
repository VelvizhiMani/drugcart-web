import mongoose from 'mongoose';

const CartItemSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    quantity: { type: Number, required: true, default: 1 },
}, {timestamps: true});

export default mongoose.models.Cart || mongoose.model('Cart', CartItemSchema);
