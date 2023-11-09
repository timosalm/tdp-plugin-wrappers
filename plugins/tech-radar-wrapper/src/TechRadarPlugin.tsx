import { TechRadarPage } from '@backstage/plugin-tech-radar';
import { AppPluginInterface, AppRouteSurface, SidebarItemSurface } from '@vmware-tanzu/core-frontend';
import { SurfaceStoreInterface } from '@vmware-tanzu/core-common';
import { SidebarItem } from '@backstage/core-components';
import BuildIcon from '@material-ui/icons/Build';
import React from 'react';
import { Route } from 'react-router';

export const TechRadarPlugin: AppPluginInterface =
  () => (context: SurfaceStoreInterface) => {
    context.applyWithDependency(
      AppRouteSurface,
      SidebarItemSurface,
      (_appRouteSurface, sidebarItemSurface) => {
        _appRouteSurface.add(
          <Route path="/tech-radar"  element={<TechRadarPage width={1500} height={800} />} />
        )
        sidebarItemSurface.addMainItem(
          <SidebarItem icon={BuildIcon} to='tech-radar' text='Tech Radar' />
        );
      }
    );
  }
