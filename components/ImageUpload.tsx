"use client";
import config from "@/lib/config";
import { IKUpload, ImageKitProvider } from "imagekitio-next";
import { useRef, useState } from "react";

const {
  env: {
    imagekit: { publicKey, urlEndpoint },
  },
} = config;

const authenticator = async () => {
  try {
    const response = await fetch(`${config.env.apiEndpoint}/api/auth/imageKit`);

    if (!response.ok) {
      const errorText = await response.text();

      throw new Error(`Request failed with status`);
    }
    const data = response.json();
    const { signature, expire, token } = data;

    return { signature, expire, token };
  } catch (error: any) {
    throw new Error(`${error.message}`);
  }
};

const ImageUpload = () => {
    const IKUploadRef = useRef(null)
    const [file, setFile] = useState(null)
  return (
    <ImageKitProvider
      publicKey={publicKey}
      urlEndpoint={urlEndpoint}
      authenticator={authenticator}
    >
      <IKUpload
    </ImageKitProvider>
  );
};

export default ImageUpload;
