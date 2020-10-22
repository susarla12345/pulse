import Ember from 'ember';
import { inject as service } from '@ember/service';
import{ computed } from '@ember/object';

const TABS = [{
    name: 'Pulse',
    route: 'pulse',
    beta: false,
},
{
    name: 'Feedback',
    route: 'feedback',
    beta: false,
},
{
    name: 'Metrics',
    route: 'metrics',
    beta: true,
},
{
    name: 'Impact',
    route: 'impact',
    beta: true,
}]

export default Ember.Component.extend({
    router: service(),
    tabs: TABS,
    
    activeTab: computed('router', function() {
       return this.router.currentRouteName;
    })
})