// hooks/useContract.ts
"use client";

import { useEffect } from "react";
import {
  useAccount,
  useReadContract,
  useWriteContract,
  useWaitForTransactionReceipt,
} from "wagmi";
import { contractABI, contractAddress } from "@/lib/contract";

export const useVoteContract = () => {
  const { address } = useAccount();

  const { data: question } = useReadContract({
    address: contractAddress,
    abi: contractABI,
    functionName: "question",
  });

  const { data: yesCountRaw, refetch: refetchYes } = useReadContract({
    address: contractAddress,
    abi: contractABI,
    functionName: "yesCount",
  });

  const { data: noCountRaw, refetch: refetchNo } = useReadContract({
    address: contractAddress,
    abi: contractABI,
    functionName: "noCount",
  });

  const { data: totalVotesRaw, refetch: refetchTotal } = useReadContract({
    address: contractAddress,
    abi: contractABI,
    functionName: "totalVotes",
  });

  const { data: hasVotedRaw, refetch: refetchVoted } = useReadContract({
    address: contractAddress,
    abi: contractABI,
    functionName: "voted",
    args: [address ?? "0x0000000000000000000000000000000000000000"],
    query: { enabled: Boolean(address) },
  });

  const { data: txHash, writeContract, isPending, error } = useWriteContract();

  const { isLoading: isConfirming, isSuccess: isConfirmed } =
    useWaitForTransactionReceipt({ hash: txHash });

  useEffect(() => {
    if (isConfirmed) {
      refetchYes?.();
      refetchNo?.();
      refetchTotal?.();
      refetchVoted?.();
    }
  }, [isConfirmed]);

  const vote = async (answer: boolean) => {
    if (!address || hasVotedRaw) return;

    writeContract({
      address: contractAddress,
      abi: contractABI,
      functionName: "vote",
      args: [answer],
    });
  };

  return {
    data: {
      question: question ?? "",
      yesCount: Number(yesCountRaw ?? 0),
      noCount: Number(noCountRaw ?? 0),
      totalVotes: Number(totalVotesRaw ?? 0),
      hasVoted: Boolean(hasVotedRaw),
    },
    actions: { vote },
    state: {
      isPending,
      isConfirming,
      isConfirmed,
      txHash,
      error,
    },
  };
};
