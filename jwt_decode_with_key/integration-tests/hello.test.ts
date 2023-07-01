import assert from "assert/strict";
import { test } from "mocha";
import "./hooks";

const SAMPLE_JWT_SUCCESS =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.RsW4fMl-kplkQh-Y-fEMm8wNDutQtXXSOO-SGG4biJ4";

const SAMPLE_JWT_FAIL =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";

test("With wrong JWT sign", async function () {
  const resp = await this.client.get("/", {
    headers: { Authorization: SAMPLE_JWT_FAIL },
  });

  assert.equal(resp.statusCode, 200);
  assert.match(resp.body, /not allowed/);
});

test("With right JWT sign", async function () {
  const resp = await this.client.get("/", {
    headers: { Authorization: SAMPLE_JWT_SUCCESS },
  });

  assert.equal(resp.statusCode, 200);
  assert.match(resp.body, /Hello John Doe/);
});
