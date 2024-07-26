import { HfInference } from "@huggingface/inference";
import donenv from "dotenv";
donenv.config();
const token = process.env.KEY;
const inference = new HfInference(token);
const model = "TencentARC/PhotoMaker-V2";
const result = await inference.textToImage({
  model: model,
  inputs:
    "award winning high resolution photo of a giant tortoise/((ladybird)) hybrid, [trending on artstation]",
  parameters: {
    negative_prompt: "blurry",
  },
});
console.log(result);
