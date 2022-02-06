import React, { useEffect, useState } from "react";

import Button from "@mui/material/Button";
import { Box, Grid, Link } from "@material-ui/core";
import SvgIcon from "@mui/material/SvgIcon";
import Icon from "@material-ui/core/Icon";

import { homepage } from "../../package.json";

const MetamaskIcon = () => {
  return (
    <Icon>
      <img classes={{ height: "100%" }} src="../images/metamask-fox.svg" />
    </Icon>
  );
};

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

function Connect({ setUserAddress }) {
  if (isMobileDevice()) {
    const dappUrl = homepage.replace("https://", ""); // TODO enter your dapp URL. For example: https://uniswap.exchange. (don't enter the "https://")
    const metamaskAppDeepLink = "https://metamask.app.link/dapp/" + dappUrl;
    return (
      <Button
        variant="contained"
        color="primary"
        startIcon={
          <SvgIcon>
            <MetamaskIcon />
          </SvgIcon>
        }
        onClick={() => connect(setUserAddress)}
      >
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href={metamaskAppDeepLink}
        >
          Connect to MetaMask
        </Link>
      </Button>
    );
  }

  return (
    <Button
      variant="contained"
      color="primary"
      startIcon={<MetamaskIcon />}
      onClick={() => connect(setUserAddress)}
    >
      Connect to MetaMask
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
