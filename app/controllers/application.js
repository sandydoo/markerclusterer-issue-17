import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { A } from '@ember/array';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class ApplicationController extends Controller {
  @service
  googleMapsApi;

  get google() {
    return this.googleMapsApi.google;
  }

  @tracked
  center = { lat: 51.507568, lng: 0 };

  markers = A();

  @action
  mapReady() {
    this.markers.pushObjects(randomCoordinatesAround(this.center, 100));
  }
}

function randomCoordinateAround({ lat, lng }) {
  const heading = randomInt(1, 360);
  const distance = randomInt(50, 10000);
  const point = window.google.maps.geometry.spherical.computeOffset(
    new window.google.maps.LatLng(lat, lng),
    distance,
    heading
  );

  return {
    lat: point.lat(),
    lng: point.lng(),
  };
}

function randomCoordinatesAround(center, count = 1) {
  const coords = [];

  for (let n = 0; n < count; n++) {
    coords.push(randomCoordinateAround(center));
  }

  return coords;
}

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
