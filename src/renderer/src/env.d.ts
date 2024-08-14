/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_PUBLIC_URL: string;
  readonly ELECTRON_RENDERER_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
