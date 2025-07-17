// context/ReferralContext.tsx
'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

type ReferralContextType = {
  referral: string | null;
};

const ReferralContext = createContext<ReferralContextType>({
  referral: null,
});

export const ReferralProvider = ({ children }: { children: React.ReactNode }) => {
  const [referral, setReferral] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const interval = setInterval(() => {
        if (window?.Rewardful?.referral) {
            console.log('window.Rewardful.referral' , window.Rewardful.referral)
          setReferral(window.Rewardful.referral);
          clearInterval(interval);
        }
      }, 100);
    }
  }, []);

  return (
    <ReferralContext.Provider value={{ referral }}>
      {children}
    </ReferralContext.Provider>
  );
};

export const useReferral = () => useContext(ReferralContext);
