import ImageKit from "imagekit";
import config from "@/lib/config";
import { NextResponse } from "next/server";

const {
  env: {
    imagekit: { publicKey, privateKey, urlEndpoint },
  },
} = config;

const imagekit = new ImageKit({
  publicKey: publicKey as string,
  privateKey: privateKey as string,
  urlEndpoint: urlEndpoint as string,
});

export async function GET() {
  return NextResponse.json(imagekit.getAuthenticationParameters());
}
