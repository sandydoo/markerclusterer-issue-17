import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';

export default class ApplicationController extends Controller {
  @tracked
  markers = [
    { lat: "0", lng: "0" }
  ];
}
