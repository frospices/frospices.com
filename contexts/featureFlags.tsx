import { PropsWithChildren, createContext, useContext } from "react";

const defaultFeatureFlags = {
  isBetaV0: process.env.NEXT_PUBLIC_BETA_V0 === "true",
  isBetaV1: process.env.NEXT_PUBLIC_BETA_V1 === "true",
  isMVPV0: process.env.NEXT_PUBLIC_MVP_V0 === "true",
  isMVPV1: process.env.NEXT_PUBLIC_MVP_V1 === "true",
};

type FeatureKeyType = keyof typeof defaultFeatureFlags;

type FeatureFlagsContextType = {
  features: Record<FeatureKeyType, boolean>;
};

export const FeatureFlagsContext = createContext<FeatureFlagsContextType>({
  features: defaultFeatureFlags,
});

type FeatureFlagsProviderProps = PropsWithChildren<{}>;

const FeatureFlagsProvider = ({ children }: FeatureFlagsProviderProps) => (
  <FeatureFlagsContext.Provider value={{ features: defaultFeatureFlags }}>
    {children}
  </FeatureFlagsContext.Provider>
);

export const useFeatureFlag = () => {
  const context = useContext(FeatureFlagsContext);

  if (!context) {
    throw new Error("FeatureFlagsProvider is not defined");
  }

  return context;
};

export default FeatureFlagsProvider;
