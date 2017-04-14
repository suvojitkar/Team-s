import { Component } from '@angular/core';

import { GeofencePage } from '../geofence/geofence';
import { ProfilePage } from '../profile/profile';
import { BeaconPage } from '../beacon/beacon';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = BeaconPage;
  tab2Root = GeofencePage;
  tab3Root = ProfilePage;

  constructor() {

  }
}
