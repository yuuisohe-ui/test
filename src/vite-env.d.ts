/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_OPENAI_API_KEY: string;
  readonly VITE_OPENAI_API_URL: string;
  readonly VITE_OPAL_API_URL: string;
  readonly VITE_OPAL_API_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

