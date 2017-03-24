import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
        delete(question) {
            if (confirm('You sure you want to delete this question?')) {
                this.sendAction('destroyQuestion', question);
            }
        },
        editQuestion(question, params) {
            this.sendAction('editQuestion', question, params);
        },
    }
});
