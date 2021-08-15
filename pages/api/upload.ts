import { NextApiRequest, NextApiResponse } from "next";
import { Form } from "multiparty";
import { v4 as uuidv4 } from "uuid";
import { renameSync } from "fs";

export interface UploadResp {
  filename: string;
  url: string;
}

const decomposeRegex = /(?<dir>.+(\/|\\)).+\.(?<ext>[a-zA-Z0-9]*)$/;

const UploadHandler = async (
  req: NextApiRequest,
  res: NextApiResponse<UploadResp>
) =>
  new Promise<void>((resolve, reject) => {
    const form = new Form({
      autoFiles: true,
      uploadDir: "public/assets/cats",
    });
    form.parse(req, (err, fields, files) => {
      try {
        if (err != null) throw err;

        const { path } = files["file"][0] as { path: string };
        const { dir, ext } = path.match(decomposeRegex).groups;

        const newFileName = `${uuidv4()}.${ext}`;
        const newFilePath = `${dir}${newFileName}`;
        renameSync(path, newFilePath);

        res.status(200).json({
          url: newFilePath.replace("public", ""),
          filename: newFileName,
        });
        resolve();
      } catch (err) {
        res.status(500).send(err);
        resolve();
      }
    });
  });

export const config = {
  api: {
    bodyParser: false, // Disallow body parsing, consume as stream
  },
};
export default UploadHandler;
