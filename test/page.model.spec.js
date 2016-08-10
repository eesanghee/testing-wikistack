var models=require('../models');
var chai = require('chai');
var expect = chai.expect;
var spies = require('chai-spies');
var Sequelize = require('sequelize');
var db = new Sequelize('postgres://localhost:5432/wikistack');
var Page = models.Page;

chai.use(spies);

describe('Page model', function () {

  describe('Virtuals', function () {
    describe('route', function () {
    	var page;
    	beforeEach(function(done){   		 
    		page = Page.build({
    			title: "webpage",
    			content: 'blahblah',
    			status: 'open'
    			});
    		page.save()
    		.then(done);
    	});
      it('returns the url_name prepended by "/wiki/"', function(){

      	expect(page.title).to.be.equal('webpage');

      });
    });
    describe('renderedContent', function () {
      it('converts the markdown-formatted content into HTML');
    });
  });

  describe('Class methods', function () {
    describe('findByTag', function () {
      it('gets pages with the search tag');
      it('does not get pages without the search tag');
    });
  });

  describe('Instance methods', function () {
    describe('findSimilar', function () {
      it('never gets itself');
      it('gets other pages with any common tags');
      it('does not get other pages without any common tags');
    });
  });

  describe('Validations', function () {
    it('errors without title');
    it('errors without content');
    it('errors given an invalid status');
  });

  describe('Hooks', function () {
    it('it sets urlTitle based on title before validating');
  });

});