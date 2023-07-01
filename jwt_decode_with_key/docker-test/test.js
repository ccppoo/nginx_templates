const chai = require("chai");
const chaiHttp = require("chai-http");
var expect = chai.expect;
chai.use(chaiHttp);

const HOST_URL = "http://localhost";

const SAMPLE_JWT_SUCCESS =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.RsW4fMl-kplkQh-Y-fEMm8wNDutQtXXSOO-SGG4biJ4";

const SAMPLE_JWT_FAIL =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";

describe("Test that JWT validating works", () => {
  it("This should fail and return 401", (done) => {
    chai
      .request(HOST_URL)
      .get("/")
      .set("Authorization", SAMPLE_JWT_FAIL)
      .end((err, res) => {
        expect(res, "status should be 401").to.have.status(401);
        expect(res, "nginx should return text not object").to.be.text;
        expect(res.text).to.be.equal("not allowed");
        done();
      });
  });

  it("This should success and return 200", (done) => {
    chai
      .request(HOST_URL)
      .get("/")
      .set("Authorization", SAMPLE_JWT_SUCCESS)
      .end((err, res) => {
        expect(res, "status should be 200").to.have.status(200);
        expect(res, "nginx should return text not object").to.be.text;
        expect(res.text).to.be.equal("Hello John Doe");
        done();
      });
  });
});
