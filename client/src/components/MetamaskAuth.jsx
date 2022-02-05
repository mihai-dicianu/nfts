import React, { useEffect, useState } from "react";

import { SvgIcon } from "@material-ui/core";
import Button from "@mui/material/Button";
function isMobileDevice() {
  return "ontouchstart" in window || "onmsgesturechange" in window;
}

async function connect(onConnected) {
  if (!window.ethereum) {
    alert("Get MetaMask!");
    return;
  }

  const accounts = await window.ethereum.request({
    method: "eth_requestAccounts",
  });

  onConnected(accounts[0]);
}

async function checkIfWalletIsConnected(onConnected) {
  if (window.ethereum) {
    const accounts = await window.ethereum.request({
      method: "eth_accounts",
    });

    if (accounts.length > 0) {
      const account = accounts[0];
      onConnected(account);
      return;
    }

    if (isMobileDevice()) {
      await connect(onConnected);
    }
  }
}

export default function MetaMaskAuth({ onAddressChanged }) {
  const [userAddress, setUserAddress] = useState("");

  useEffect(() => {
    checkIfWalletIsConnected(setUserAddress);
  }, []);

  useEffect(() => {
    // eslint-disable-line react-hooks/exhaustive-deps
    onAddressChanged(userAddress);
  }, [userAddress]);

  return userAddress ? (
    <div>
      Connected with <Address userAddress={userAddress} />
    </div>
  ) : (
    <Connect setUserAddress={setUserAddress} />
  );
}

const MetamaskIcon = (props) => {
  return (
    <SvgIcon {...props}>
      <path d="../images/metamask-fox.svg" />
    </SvgIcon>
  );
};

function Connect({ setUserAddress }) {
  if (isMobileDevice()) {
    const dappUrl = "metamask-auth.ilamanov.repl.co"; // TODO enter your dapp URL. For example: https://uniswap.exchange. (don't enter the "https://")
    const metamaskAppDeepLink = "https://metamask.app.link/dapp/" + dappUrl;
    return (
      <a href={metamaskAppDeepLink}>
        <button>Connect to MetaMask</button>
      </a>
    );
  }

  return (
    <Button
      variant="contained"
      color="primary"
      startIcon={<MetamaskIcon />}
      onClick={() => connect(setUserAddress)}
    >
      {/* <Link
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/mihaidicianu/nfts"
      > */}
      Connect to MetaMask
      {/* </Link> */}
    </Button>
  );
}

function Address({ userAddress }) {
  return (
    <span>
      {userAddress.substring(0, 5)}…
      {userAddress.substring(userAddress.length - 4)}
    </span>
  );
}
