import mongoose from "mongoose";

const ProgramSchema = new mongoose.Schema({
    program: {
        type: String,
        index: true,
        required: [true, 'Please enter program']
    },
    status: {
        type: String,
        required: true,
        enum: ['Verified', 'Rejected']
    }
}, {
    timestamps: true,
    collection: "Applicants"
})

export const Program = mongoose.models.Applicants || mongoose.model('Applicants', ProgramSchema);
