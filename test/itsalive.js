// var chai = require('chai');
// var expect = chai.expect;
// var spies = require('chai-spies');
// chai.use(spies);


// describe('2+2 = 4', function(){
// 	var x = 2 + 2;
// 	it('should = 4', function(){
// 		expect(x).to.be.equal(4);
// 	})
// })

// describe('setTimeOut', function(){
// 	it('should run in 1000 ms', function(done){
// 		var start = new Date();
// 		setTimeout(function(){
// 			var duration = new Date() - start;
// 			expect(duration).to.be.closeTo(1000,50);
// 			done();
// 		}, 1000)
// 	})
// })

// describe('testing spy', function(){
// 	it('should run for every element', function(){
// 			function theresa(el){
// 		console.log(el)
// 	}
// 		chai.spy(theresa);
// 		var arr=[1,2,3,4];
// 		arr.forEach(theresa);
// 		expect(theresa).to.have.been.called.exactly(arr.length);
// 	})
// })