interface markerInterface {
  location: {
    lat: number;
    long: number;
  };
  markerContent(): string;
}

export class CustomMap {
  private googleMap: google.maps.Map;
  constructor() {
    this.googleMap = new google.maps.Map(
      document.getElementById('map') as HTMLElement,
      {
        zoom: 1,
        center: {
          lat: 0,
          lng: 0,
        },
      }
    );
  }
  //aproach 01
  //   addUserMarker(user: User): void {
  //     new google.maps.Marker({
  //       map: this.googleMap,
  //       position: {
  //         lat: user.location.lat,
  //         lng: user.location.long,
  //       },
  //     });
  //   }
  //   addCompanyMarker(company: Company): void {
  //     new google.maps.Marker({
  //       map: this.googleMap,
  //       position: {
  //         lat: company.location.lat,
  //         lng: company.location.long,
  //       },
  //     });
  //   }

  //approach02
  //   addMarker(markerObj: User | Company): void {
  //     new google.maps.Marker({
  //       map: this.googleMap,
  //       position: {
  //         lat: markerObj.location.lat,
  //         lng: markerObj.location.long,
  //       },
  //     });
  //   }

  //best approach with interfaces
  addMarker(markerObj: markerInterface): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: markerObj.location.lat,
        lng: markerObj.location.long,
      },
    });
    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: markerObj.markerContent(),
      });
      infoWindow.open(this.googleMap, marker);
    });
  }
}
