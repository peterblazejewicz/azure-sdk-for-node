// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'East US 2';
  process.env['AZURE_TEST_RESOURCE_GROUP'] = 'xplattestadlarg05';
  process.env['AZURE_SUBSCRIPTION_ID'] = '53d9063d-87ae-4ea8-be90-3686c3b8669f';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://xplattestadls4897.azuredatalakestore.net:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/webhdfs/v1/adlssdkfolder01%2Fconcatfile.txt?overwrite=true&op=CREATE&write=true&api-version=2015-10-01-preview', '*')
  .reply(201, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://xplattestadls4897.azuredatalakestore.net/webhdfs/v1/adlssdkfolder01/concatfile.txt?overwrite=true&op=CREATE&write=true&api-version=2015-10-01-preview',
  'x-ms-request-id': '023dd3cd-f9eb-47ea-a2c8-59120000ca8c',
  'set-cookie': [ 'UserPrincipalSession=d5e07dbc-5f71-4a2f-8ae8-4b963a8dcdea; path=/; secure; HttpOnly' ],
  contentlength: '0',
  'server-perf': '[023dd3cdf9eb47eaa2c859120000ca8c][ AuthTime::1490.51693351268::PostAuthTime::30945.441092504 ][FsDelete :: 00:00:347 ms]%0a[CleanCacheDelete :: 00:00:000 ms]%0a[Delete :: 00:00:348 ms]%0a[FsOpenStream :: 00:00:102 ms]%0a[Open :: 00:00:102 ms]%0a[FsAppendStream :: 00:00:269 ms]%0a[Write :: 00:00:270 ms]%0a[CREATE :: 00:00:722 ms]%0a',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Wed, 16 Mar 2016 21:45:18 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls4897.azuredatalakestore.net:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/webhdfs/v1/adlssdkfolder01%2Fconcatfile.txt?overwrite=true&op=CREATE&write=true&api-version=2015-10-01-preview', '*')
  .reply(201, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://xplattestadls4897.azuredatalakestore.net/webhdfs/v1/adlssdkfolder01/concatfile.txt?overwrite=true&op=CREATE&write=true&api-version=2015-10-01-preview',
  'x-ms-request-id': '023dd3cd-f9eb-47ea-a2c8-59120000ca8c',
  'set-cookie': [ 'UserPrincipalSession=d5e07dbc-5f71-4a2f-8ae8-4b963a8dcdea; path=/; secure; HttpOnly' ],
  contentlength: '0',
  'server-perf': '[023dd3cdf9eb47eaa2c859120000ca8c][ AuthTime::1490.51693351268::PostAuthTime::30945.441092504 ][FsDelete :: 00:00:347 ms]%0a[CleanCacheDelete :: 00:00:000 ms]%0a[Delete :: 00:00:348 ms]%0a[FsOpenStream :: 00:00:102 ms]%0a[Open :: 00:00:102 ms]%0a[FsAppendStream :: 00:00:269 ms]%0a[Write :: 00:00:270 ms]%0a[CREATE :: 00:00:722 ms]%0a',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Wed, 16 Mar 2016 21:45:18 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestadls4897.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlssdkfolder01%2Fconcatfile.txt?length=23&offset=0&op=OPEN&read=true&api-version=2015-10-01-preview')
  .reply(200, "adls sdk test content!a", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'transfer-encoding': 'chunked',
  'content-type': 'application/octet-stream',
  expires: '-1',
  'x-ms-request-id': '0724fdd1-3e1a-4cf7-96e6-29b2137fad26',
  'set-cookie': [ 'UserPrincipalSession=12849f05-45e9-4b1a-98cd-76c6e4762447; path=/; secure; HttpOnly' ],
  'server-perf': '[0724fdd13e1a4cf796e629b2137fad26][ AuthTime::1407.5411013977::PostAuthTime::31042.4614647666 ][FsOpenStream :: 00:00:107 ms]%0a[Open :: 00:00:107 ms]%0a[FsReadStream :: 00:00:043 ms]%0a[OPEN :: 00:00:151 ms]%0a',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Wed, 16 Mar 2016 21:45:19 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls4897.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlssdkfolder01%2Fconcatfile.txt?length=23&offset=0&op=OPEN&read=true&api-version=2015-10-01-preview')
  .reply(200, "adls sdk test content!a", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'transfer-encoding': 'chunked',
  'content-type': 'application/octet-stream',
  expires: '-1',
  'x-ms-request-id': '0724fdd1-3e1a-4cf7-96e6-29b2137fad26',
  'set-cookie': [ 'UserPrincipalSession=12849f05-45e9-4b1a-98cd-76c6e4762447; path=/; secure; HttpOnly' ],
  'server-perf': '[0724fdd13e1a4cf796e629b2137fad26][ AuthTime::1407.5411013977::PostAuthTime::31042.4614647666 ][FsOpenStream :: 00:00:107 ms]%0a[Open :: 00:00:107 ms]%0a[FsReadStream :: 00:00:043 ms]%0a[OPEN :: 00:00:151 ms]%0a',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Wed, 16 Mar 2016 21:45:19 GMT',
  connection: 'close' });
 return result; }]];