import axios from "axios";

export default function handler(
  req: any,
  res: {
    status: (arg0: number) => {
      (): any;
      new (): any;
      json: { (arg0: { success: boolean }): void; new (): any };
    };
  }
) {
  res.status(200).json({ success: true });

  axios.post(
    "https://api.pinata.cloud/pinning/pinByHash",
    {
      hashToPin: req.query.hash,
    },
    {
      headers: {
        pinata_api_key: "b04fe4e28bafcac2263a",
        pinata_secret_api_key:
          "4d53f4c38d7292ce2acf381b958aa00601ae5f73275f715ff6ba5713c64b22b1",
      },
    }
  );
}
