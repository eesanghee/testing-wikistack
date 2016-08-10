var models=require('../models');
var chai = require('chai');
var expect = chai.expect;
var spies = require('chai-spies');
var Sequelize = require('sequelize');
var db = new Sequelize('postgres://localhost:5432/wikistack');
var Page = models.Page;

chai.use(spies);

describe('Page model', function () {
  var page;
      beforeEach(function(done){       
        page = Page.build({
          title: "webpage",
          content: '# blahblah',
          status: 'open'
          });
        page.save()
        .then(function(){
          done();
        })
        .catch(function(err){
          console.error(err);
        })
      });
  describe('Virtuals', function () {
    describe('route', function () {
      });
      it('returns the url_name prepended by "/wiki/"', function(){

        expect(page.urlTitle).to.be.equal('webpage');

      });
    });
    describe('renderedContent', function () {
      it('converts the markdown-formatted content into HTML', function(){
        expect(page.renderedContent).to.be.equal('<h1 id="blahblah">blahblah</h1>\n');
      });
    });
  });

  describe('Class methods', function () {

    beforeEach('Sync tables', function (done) {
        Page.sync({force: true})
            .then(function () {
                done();
            })
            .catch(done);
    });
      var page;
      beforeEach(function(done){       
        page = Page.build({
          title: "webpage",
          content: '# blahblah',
          status: 'open',
          tags: ['wild wednesday', 'tgif']
          });
        page.save()
        .then(function(){
          done();
        })
        .catch(function(err){
          console.error(err);
        })
      });
    describe('findByTag', function () {
      it('gets pages with the search tag', function(done){
        Page.findByTag('tgif')
        .then(function(pages){
          expect(pages).to.have.lengthOf(1);
          done();
        })
        .catch(done);
      });

      it('does not get pages without the search tag', function(done){
        Page.findByTag('tf')
        .then(function(pages){
          expect(pages).to.have.lengthOf(0);
          done();
        })
        .catch(done);
      });

    });
  });

  describe('Instance methods', function () {
        beforeEach('Sync tables', function (done) {
        Page.sync({force: true})
            .then(function () {
                done();
            })
            .catch(done);
    });
      var page, page1, page2;
      beforeEach(function(done){       
        page = Page.create({
          title: "The Web",
          content: 'blahblah',
          status: 'open',
          tags: ['internet', 'websites']
          })
        .then(function(){
          done();
        })
        .catch(function(err){
          console.error(err);
        })
      });
      beforeEach(function(done){       
          page1 = Page.create({
          title: "Candy",
          content: 'blahblah',
          status: 'open',
          tags: ['sweet', 'sugar']
          })
        .then(function(){
          done();
        })
        .catch(function(err){
          console.error(err);
        })
      }); 
      beforeEach(function(done){       
          page2 =  Page.create({
          title: "Javascript",
          content: 'blahblah',
          status: 'open',
          tags: ['internet', 'coding']
          })
        .then(function(){
          done();
        })
        .catch(function(err){
          console.error(err);
        })
      });            
    describe('findSimilar', function () {
      it('never gets itself', function(done){
        Page.findOne({
            where: {
                urlTitle: 'The_Web'
            }
        })
            .then(function (page) {

                return page.findSimilar();

            })
            .then(function(pages){
              expect(pages).to.have.lengthOf(1);
              done();
        })
        .catch(done);
      });    
      it('gets other pages with any common tags');
      it('does not get other pages without any common tags');
  });
  });

  describe('Validations', function () {
var page;
beforeEach(function () {
  page = Page.build();
});
     it('errors without title', function(done){
        page.validate()
        .then(function(err){
          console.log("Consoling error" , err);
          expect(err).to.exist;
          expect(err.errors).to.exist;
          expect(err.errors[0].path).to.equal('title');
          done();
    });
  });

    it('errors without content', function(done){
        page.validate()
        .then(function(err){
          console.log("Consoling error" , err);
          expect(err).to.exist;
          expect(err.errors).to.exist;
          expect(err.errors[0].path).to.equal('title');
          done();
    });
  });
    it('errors given an invalid status');
  });
  describe('Hooks', function () {
    var page;
        beforeEach(function(done){       
          page = Page.build({
            title: "web page!",
            content: '# blahblah',
            status: 'open'
            });
          page.save()
          .then(function(){
            done();
          })
          .catch(function(err){
            console.error(err);
          })
        });
    it('it sets urlTitle based on title before validating', function(){
      expect(page.urlTitle).to.be.equal('web_page');
    });
  });

