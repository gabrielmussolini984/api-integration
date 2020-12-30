import mongoose from 'mongoose';

const OpportunitySchema = new mongoose.Schema(
  {
    date: String,
    amount: Number,
  },
  { timestamps: true }
);

const OpportunityModel = mongoose.model('Opportuniry', OpportunitySchema);

export default OpportunityModel;
