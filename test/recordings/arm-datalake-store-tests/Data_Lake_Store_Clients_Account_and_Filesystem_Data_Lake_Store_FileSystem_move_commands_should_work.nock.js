// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'East US 2';
  process.env['AZURE_TEST_RESOURCE_GROUP'] = 'xplattestadlarg05';
  process.env['AZURE_SUBSCRIPTION_ID'] = '53d9063d-87ae-4ea8-be90-3686c3b8669f';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://xplattestadls4897.azuredatalakestore.net:443')
  .put('/webhdfs/v1/adlssdkfolder01%2Fconcatfile.txt?destination=adlssdkfolder01%2Fmovefile.txt&op=RENAME&api-version=2015-10-01-preview')
  .reply(200, "{\"boolean\":true}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'd4c7c978-e08c-4b77-ba22-4513d6a32400',
  'set-cookie': [ 'UserPrincipalSession=86d3c965-136a-4c4a-8013-ffe4649e67e7; path=/; secure; HttpOnly' ],
  'server-perf': '[d4c7c978e08c4b77ba224513d6a32400][ AuthTime::1487.52306879687::PostAuthTime::30910.7978007925 ][IsExist :: 00:00:000 ms]%0a[HdfsGetFileStatus :: 00:00:038 ms]%0a[SS Response Process :: 00:00:000 ms]%0a[FsRename :: 00:00:091 ms]%0a[CleanCacheRename :: 00:00:000 ms]%0a[RENAME :: 00:00:130 ms]%0a',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Wed, 16 Mar 2016 21:45:20 GMT',
  connection: 'close',
  'content-length': '16' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls4897.azuredatalakestore.net:443')
  .put('/webhdfs/v1/adlssdkfolder01%2Fconcatfile.txt?destination=adlssdkfolder01%2Fmovefile.txt&op=RENAME&api-version=2015-10-01-preview')
  .reply(200, "{\"boolean\":true}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'd4c7c978-e08c-4b77-ba22-4513d6a32400',
  'set-cookie': [ 'UserPrincipalSession=86d3c965-136a-4c4a-8013-ffe4649e67e7; path=/; secure; HttpOnly' ],
  'server-perf': '[d4c7c978e08c4b77ba224513d6a32400][ AuthTime::1487.52306879687::PostAuthTime::30910.7978007925 ][IsExist :: 00:00:000 ms]%0a[HdfsGetFileStatus :: 00:00:038 ms]%0a[SS Response Process :: 00:00:000 ms]%0a[FsRename :: 00:00:091 ms]%0a[CleanCacheRename :: 00:00:000 ms]%0a[RENAME :: 00:00:130 ms]%0a',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Wed, 16 Mar 2016 21:45:20 GMT',
  connection: 'close',
  'content-length': '16' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestadls4897.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlssdkfolder01%2Fmovefile.txt?op=GETFILESTATUS&api-version=2015-10-01-preview')
  .reply(200, "{\"FileStatus\":{\"length\":44,\"pathSuffix\":\"\",\"type\":\"FILE\",\"blockSize\":268435456,\"accessTime\":1458164718707,\"modificationTime\":1458164719023,\"replication\":0,\"permission\":\"777\",\"owner\":\"NotSupportYet\",\"group\":\"NotSupportYet\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'da51b02d-0e5c-4936-b3a1-c4924ac739d0',
  'server-perf': '[da51b02d0e5c4936b3a1c4924ac739d0][ AuthTime::609.464535151776::PostAuthTime::134.72373934934 ][IsExist :: 00:00:000 ms]%0a[HdfsGetFileStatus :: 00:00:054 ms]%0a[SS Response Process :: 00:00:000 ms]%0a[GETFILESTATUS :: 00:00:054 ms]%0a',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Wed, 16 Mar 2016 21:45:19 GMT',
  connection: 'close',
  'content-length': '223' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls4897.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlssdkfolder01%2Fmovefile.txt?op=GETFILESTATUS&api-version=2015-10-01-preview')
  .reply(200, "{\"FileStatus\":{\"length\":44,\"pathSuffix\":\"\",\"type\":\"FILE\",\"blockSize\":268435456,\"accessTime\":1458164718707,\"modificationTime\":1458164719023,\"replication\":0,\"permission\":\"777\",\"owner\":\"NotSupportYet\",\"group\":\"NotSupportYet\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'da51b02d-0e5c-4936-b3a1-c4924ac739d0',
  'server-perf': '[da51b02d0e5c4936b3a1c4924ac739d0][ AuthTime::609.464535151776::PostAuthTime::134.72373934934 ][IsExist :: 00:00:000 ms]%0a[HdfsGetFileStatus :: 00:00:054 ms]%0a[SS Response Process :: 00:00:000 ms]%0a[GETFILESTATUS :: 00:00:054 ms]%0a',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Wed, 16 Mar 2016 21:45:19 GMT',
  connection: 'close',
  'content-length': '223' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestadls4897.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlssdkfolder01%2Fconcatfile.txt?op=GETFILESTATUS&api-version=2015-10-01-preview')
  .reply(404, "{\"RemoteException\":{\"exception\":\"FileNotFoundException\",\"message\":\"File/Folder does not exist: /adlssdkfolder01/concatfile.txt [e82aae976ea548a3b7873d320c83c253]\",\"javaClassName\":\"java.io.FileNotFoundException\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'e82aae97-6ea5-48a3-b787-3d320c83c253',
  'server-perf': '[e82aae976ea548a3b7873d320c83c253][ AuthTime::657.366309142652::PostAuthTime::133.868350528074 ][IsExist :: 00:00:000 ms]%0a[HdfsGetFileStatus :: 00:00:032 ms]%0a[SS Response Process :: 00:00:000 ms]%0a[GETFILESTATUS :: 00:00:032 ms]%0a',
  status: '0x8309000A',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Wed, 16 Mar 2016 21:45:19 GMT',
  connection: 'close',
  'content-length': '212' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls4897.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlssdkfolder01%2Fconcatfile.txt?op=GETFILESTATUS&api-version=2015-10-01-preview')
  .reply(404, "{\"RemoteException\":{\"exception\":\"FileNotFoundException\",\"message\":\"File/Folder does not exist: /adlssdkfolder01/concatfile.txt [e82aae976ea548a3b7873d320c83c253]\",\"javaClassName\":\"java.io.FileNotFoundException\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'e82aae97-6ea5-48a3-b787-3d320c83c253',
  'server-perf': '[e82aae976ea548a3b7873d320c83c253][ AuthTime::657.366309142652::PostAuthTime::133.868350528074 ][IsExist :: 00:00:000 ms]%0a[HdfsGetFileStatus :: 00:00:032 ms]%0a[SS Response Process :: 00:00:000 ms]%0a[GETFILESTATUS :: 00:00:032 ms]%0a',
  status: '0x8309000A',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Wed, 16 Mar 2016 21:45:19 GMT',
  connection: 'close',
  'content-length': '212' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestadls4897.azuredatalakestore.net:443')
  .put('/webhdfs/v1/adlssdkfolder01?destination=adlssdkfolder02&op=RENAME&api-version=2015-10-01-preview')
  .reply(200, "{\"boolean\":true}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '5da27828-cfe1-4625-9ee9-290f39be6e4e',
  'set-cookie': [ 'UserPrincipalSession=d6adbf03-9370-4d48-a7c7-bb6286e6a1e8; path=/; secure; HttpOnly' ],
  'server-perf': '[5da27828cfe146259ee9290f39be6e4e][ AuthTime::1456.7271626154::PostAuthTime::31259.7567787426 ][IsExist :: 00:00:000 ms]%0a[HdfsGetFileStatus :: 00:00:104 ms]%0a[SS Response Process :: 00:00:000 ms]%0a[FsRename :: 00:00:095 ms]%0a[CleanCacheRename :: 00:00:000 ms]%0a[RENAME :: 00:00:200 ms]%0a',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Wed, 16 Mar 2016 21:45:21 GMT',
  connection: 'close',
  'content-length': '16' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls4897.azuredatalakestore.net:443')
  .put('/webhdfs/v1/adlssdkfolder01?destination=adlssdkfolder02&op=RENAME&api-version=2015-10-01-preview')
  .reply(200, "{\"boolean\":true}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '5da27828-cfe1-4625-9ee9-290f39be6e4e',
  'set-cookie': [ 'UserPrincipalSession=d6adbf03-9370-4d48-a7c7-bb6286e6a1e8; path=/; secure; HttpOnly' ],
  'server-perf': '[5da27828cfe146259ee9290f39be6e4e][ AuthTime::1456.7271626154::PostAuthTime::31259.7567787426 ][IsExist :: 00:00:000 ms]%0a[HdfsGetFileStatus :: 00:00:104 ms]%0a[SS Response Process :: 00:00:000 ms]%0a[FsRename :: 00:00:095 ms]%0a[CleanCacheRename :: 00:00:000 ms]%0a[RENAME :: 00:00:200 ms]%0a',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Wed, 16 Mar 2016 21:45:21 GMT',
  connection: 'close',
  'content-length': '16' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestadls4897.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlssdkfolder02?op=GETFILESTATUS&api-version=2015-10-01-preview')
  .reply(200, "{\"FileStatus\":{\"length\":0,\"pathSuffix\":\"\",\"type\":\"DIRECTORY\",\"blockSize\":268435456,\"accessTime\":1458164711969,\"modificationTime\":1458164720000,\"replication\":0,\"permission\":\"777\",\"owner\":\"NotSupportYet\",\"group\":\"NotSupportYet\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'cc100fc6-8979-4f83-b92c-f682f93d71cb',
  'set-cookie': [ 'UserPrincipalSession=a4d24728-c3ea-45fe-892b-7704766d0c71; path=/; secure; HttpOnly' ],
  'server-perf': '[cc100fc689794f83b92cf682f93d71cb][ AuthTime::1462.71676115161::PostAuthTime::31051.5094424355 ][IsExist :: 00:00:000 ms]%0a[HdfsGetFileStatus :: 00:00:107 ms]%0a[SS Response Process :: 00:00:000 ms]%0a[GETFILESTATUS :: 00:00:108 ms]%0a',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Wed, 16 Mar 2016 21:45:21 GMT',
  connection: 'close',
  'content-length': '227' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls4897.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlssdkfolder02?op=GETFILESTATUS&api-version=2015-10-01-preview')
  .reply(200, "{\"FileStatus\":{\"length\":0,\"pathSuffix\":\"\",\"type\":\"DIRECTORY\",\"blockSize\":268435456,\"accessTime\":1458164711969,\"modificationTime\":1458164720000,\"replication\":0,\"permission\":\"777\",\"owner\":\"NotSupportYet\",\"group\":\"NotSupportYet\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'cc100fc6-8979-4f83-b92c-f682f93d71cb',
  'set-cookie': [ 'UserPrincipalSession=a4d24728-c3ea-45fe-892b-7704766d0c71; path=/; secure; HttpOnly' ],
  'server-perf': '[cc100fc689794f83b92cf682f93d71cb][ AuthTime::1462.71676115161::PostAuthTime::31051.5094424355 ][IsExist :: 00:00:000 ms]%0a[HdfsGetFileStatus :: 00:00:107 ms]%0a[SS Response Process :: 00:00:000 ms]%0a[GETFILESTATUS :: 00:00:108 ms]%0a',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Wed, 16 Mar 2016 21:45:21 GMT',
  connection: 'close',
  'content-length': '227' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestadls4897.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlssdkfolder01?op=GETFILESTATUS&api-version=2015-10-01-preview')
  .reply(404, "{\"RemoteException\":{\"exception\":\"FileNotFoundException\",\"message\":\"File/Folder does not exist: /adlssdkfolder01 [bde6fc8f2a6b4de78b65b4a3521ba202]\",\"javaClassName\":\"java.io.FileNotFoundException\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'bde6fc8f-2a6b-4de7-8b65-b4a3521ba202',
  'server-perf': '[bde6fc8f2a6b4de78b65b4a3521ba202][ AuthTime::647.529337698097::PostAuthTime::139.000683455668 ][IsExist :: 00:00:000 ms]%0a[HdfsGetFileStatus :: 00:00:036 ms]%0a[SS Response Process :: 00:00:000 ms]%0a[GETFILESTATUS :: 00:00:036 ms]%0a',
  status: '0x8309000A',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Wed, 16 Mar 2016 21:45:22 GMT',
  connection: 'close',
  'content-length': '197' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls4897.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlssdkfolder01?op=GETFILESTATUS&api-version=2015-10-01-preview')
  .reply(404, "{\"RemoteException\":{\"exception\":\"FileNotFoundException\",\"message\":\"File/Folder does not exist: /adlssdkfolder01 [bde6fc8f2a6b4de78b65b4a3521ba202]\",\"javaClassName\":\"java.io.FileNotFoundException\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'bde6fc8f-2a6b-4de7-8b65-b4a3521ba202',
  'server-perf': '[bde6fc8f2a6b4de78b65b4a3521ba202][ AuthTime::647.529337698097::PostAuthTime::139.000683455668 ][IsExist :: 00:00:000 ms]%0a[HdfsGetFileStatus :: 00:00:036 ms]%0a[SS Response Process :: 00:00:000 ms]%0a[GETFILESTATUS :: 00:00:036 ms]%0a',
  status: '0x8309000A',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Wed, 16 Mar 2016 21:45:22 GMT',
  connection: 'close',
  'content-length': '197' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestadls4897.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlssdkfolder02?op=LISTSTATUS&api-version=2015-10-01-preview')
  .reply(200, "{\"FileStatuses\":{\"FileStatus\":[{\"length\":44,\"pathSuffix\":\"movefile.txt\",\"type\":\"FILE\",\"blockSize\":268435456,\"accessTime\":1458164718707,\"modificationTime\":1458164719023,\"replication\":0,\"permission\":\"777\",\"owner\":\"NotSupportYet\",\"group\":\"NotSupportYet\"}]}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '3e25ad9f-425c-4dda-a869-a488e53f6b63',
  'set-cookie': [ 'UserPrincipalSession=73249926-61fb-4b0e-bd22-9469728c987d; path=/; secure; HttpOnly' ],
  'server-perf': '[3e25ad9f425c4ddaa869a488e53f6b63][ AuthTime::1470.84233630838::PostAuthTime::31232.4110523173 ][FsEnumerateDirectory :: 00:00:134 ms]%0a[EnumerateDirectory :: 00:00:135 ms]%0a[ListDirectory :: 00:00:135 ms]%0a[LISTSTATUS :: 00:00:135 ms]%0a',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Wed, 16 Mar 2016 21:45:22 GMT',
  connection: 'close',
  'content-length': '254' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls4897.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlssdkfolder02?op=LISTSTATUS&api-version=2015-10-01-preview')
  .reply(200, "{\"FileStatuses\":{\"FileStatus\":[{\"length\":44,\"pathSuffix\":\"movefile.txt\",\"type\":\"FILE\",\"blockSize\":268435456,\"accessTime\":1458164718707,\"modificationTime\":1458164719023,\"replication\":0,\"permission\":\"777\",\"owner\":\"NotSupportYet\",\"group\":\"NotSupportYet\"}]}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '3e25ad9f-425c-4dda-a869-a488e53f6b63',
  'set-cookie': [ 'UserPrincipalSession=73249926-61fb-4b0e-bd22-9469728c987d; path=/; secure; HttpOnly' ],
  'server-perf': '[3e25ad9f425c4ddaa869a488e53f6b63][ AuthTime::1470.84233630838::PostAuthTime::31232.4110523173 ][FsEnumerateDirectory :: 00:00:134 ms]%0a[EnumerateDirectory :: 00:00:135 ms]%0a[ListDirectory :: 00:00:135 ms]%0a[LISTSTATUS :: 00:00:135 ms]%0a',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Wed, 16 Mar 2016 21:45:22 GMT',
  connection: 'close',
  'content-length': '254' });
 return result; }]];