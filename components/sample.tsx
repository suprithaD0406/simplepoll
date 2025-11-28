// components/sample.tsx
"use client";

import { useVoteContract } from "@/hooks/useContract";
import { useAccount } from "wagmi";

const SampleIntegration = () => {
  const { isConnected } = useAccount();
  const { data, actions, state } = useVoteContract();

  if (!isConnected) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <p className="text-lg font-semibold">Connect your wallet to vote.</p>
      </div>
    );
  }

  const handleVote = async (yes: boolean) => {
    await actions.vote(yes);
  };

  return (
    <div className="min-h-screen p-6 max-w-lg mx-auto space-y-6">
      <h1 className="text-2xl font-bold">{data.question || "Loading question..."}</h1>

      <div className="bg-card border rounded-lg p-4 space-y-2">
        <p><strong>Yes:</strong> {data.yesCount}</p>
        <p><strong>No:</strong> {data.noCount}</p>
        <p className="text-sm text-muted-foreground">Total Votes: {data.totalVotes}</p>
      </div>

      {!data.hasVoted ? (
        <div className="grid grid-cols-2 gap-4">
          <button
            onClick={() => handleVote(true)}
            disabled={state.isPending}
            className="px-6 py-2 bg-green-600 text-white rounded-lg"
          >
            {state.isPending ? "Voting..." : "Vote YES"}
          </button>
          <button
            onClick={() => handleVote(false)}
            disabled={state.isPending}
            className="px-6 py-2 bg-red-600 text-white rounded-lg"
          >
            {state.isPending ? "Voting..." : "Vote NO"}
          </button>
        </div>
      ) : (
        <p className="text-green-500 font-medium">You have already voted!</p>
      )}

      {state.txHash && (
        <div className="text-xs break-all p-2 border rounded-lg">
          Tx Hash: {state.txHash}
        </div>
      )}

      {state.error && (
        <p className="text-red-500 text-sm">Error: {String(state.error)}</p>
      )}
    </div>
  );
};

export default SampleIntegration;
