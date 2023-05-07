declare namespace NodeJS {
  export interface ProcessEnv {
    SENDGRID_API_KEY: string;
    SENDGRID_VERIFIED_EMAIL: string;
    SENDGRID_NEWSLETTER_ID: string;
    NEXT_PUBLIC_LAUNCHDARKLY_SDK_CLIENT_SIDE_ID: string;
    NEXT_PUBLIC_PLATFORM_URL: string;
    NEXT_PUBLIC_BETA_V0: "true" | "false";
    NEXT_PUBLIC_BETA_V1: "true" | "false";
    NEXT_PUBLIC_MVP_V0: "true" | "false";
    NEXT_PUBLIC_MVP_V1: "true" | "false";
  }
}
