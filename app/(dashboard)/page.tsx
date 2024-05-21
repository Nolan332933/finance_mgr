"use client";

import { Button } from "@/components/ui/button";
import { useNewAccount } from "@/features/accounts/hooks/use-new-account";

// import { Button } from "@/components/ui/button";
// import { useGetAccounts } from "@/features/accounts/api/use-get-account";
// import { UserButton } from "@clerk/nextjs";

export default function Home() {
  // const { data: accounts, isLoading } = useGetAccounts();

  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }
  const { onOpen } = useNewAccount();
  return (
    <div>
      {/* {accounts?.map((account) => (
        <div key={account.id}>{account.name}</div>
      ))} */}
      <Button onClick={onOpen}>Add an account</Button>
    </div>
  );
}
