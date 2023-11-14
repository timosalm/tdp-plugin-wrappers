import { AppPluginInterface, AppRouteSurface, SidebarItemSurface } from '@vmware-tanzu/core-frontend';
import { SurfaceStoreInterface } from '@vmware-tanzu/core-common';
import { SidebarItem } from '@backstage/core-components';
import QueueIcon from '@material-ui/icons/Queue';
import { ScaffolderPage } from '@backstage/plugin-scaffolder';
import React from 'react';
import { Route } from 'react-router';

export const ScaffolderPlugin: AppPluginInterface =
  () => (context: SurfaceStoreInterface) => {
    context.applyWithDependency(
      AppRouteSurface,
      SidebarItemSurface,
      (_appRouteSurface, sidebarItemSurface) => {
        _appRouteSurface.add(
          <Route path="/self-service"  element={<ScaffolderPage />} />
        )
        sidebarItemSurface.addMainItem(
          <SidebarItem icon={QueueIcon} to='self-service' text='Self-Service' />
        );
      }
    );
  }
