import { Schema, model } from "mongoose";

const examinerSchema = Schema(
	{
		user: {
			type: Schema.Types.ObjectId,
			required: true,
			ref: "User",
		},
		examName: {
			type: String,
			required: true,
		},
		time: {
			type: Date,
			required: true,
		},
		date: {
			type: Date,
			required: true,
		},
		duration: {
			type: Number,
			required: true,
		},
		incorrectPoints: {
			type: Number,
			required: true,
		},
		correctPoints: {
			type: Number,
			required: true,
		},
		instructions: {
			type: String,
			required: true,
		},
		question: {
			type: String,
			required: true,
		},
		answer: {
			type: Array,
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

const Examiner = model("Examiner", examinerSchema);

export default Examiner;
