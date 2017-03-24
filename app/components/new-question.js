import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestion: false,
    actions: {
        questionForm() {
            this.set('addNewQuestion', true);
        },

        saveQuestion() {
            var params = {
                author: this.get('author'),
                body: this.get('body'),
                notes: this.get('notes'),
            };
            this.set('addNewQuestion', false);
            this.sendAction('saveQuestion', params);
        }
    }
});
