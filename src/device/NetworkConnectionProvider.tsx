import React, {useEffect, FC} from 'react';
import NetInfo from '@react-native-community/netinfo';
import {showError} from '../helpers/ui';

type Props = {
  children: React.ReactNode;
};

const NetworkConnectionProvider: FC<Props> = ({children}) => {
  useEffect(() => {
    NetInfo.fetch().then((state: {isConnected: boolean | null}) => {
      if (!state.isConnected) {
        showError(
          'You are currently offline. Please reconnect to the internet to continue',
        );
      }
    });
  });

  return <>{children}</>;
};

NetworkConnectionProvider.displayName = 'NetworkConnectionProvider';

export default NetworkConnectionProvider;
