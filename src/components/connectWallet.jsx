async function connectWallet() {
        if (account !== undefined) {
            setConnectTextSt(`Account ${account} already connected `);
        } else {
            const wData = await walletConnectFcn();


            let newAccount = wData[0];
            let newNetwork = wData[2];
            if (newAccount !== undefined) {
                setConnectTextSt(`Account ${newAccount} connected `);
                setConnectLinkSt(`https://hashscan.io/${newNetwork}/account/${newAccount}`);


                setWalletData(wData);
                setAccount(newAccount);
                setNetwork(newNetwork);
                setContractTextSt();
            }
        }
    }