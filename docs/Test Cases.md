# Unit Test

Precondition: All contracts are deployed by account "lat1ar0s6re3qpe3rt39523qw4jars6s4sdhak459n"

## Context

|Number|EVM_0_001_001_001|
|:----|:----|
|Test Item|Context|
|Title|message sender|
|Priority|1|
|Precondition|1. deploy contracts|
|Input|    |
|Operation Steps|1. call method **_msgSender** with account "lat1a3tlqd07aps8tjsegz967gdq686qttk2e2p4kw"|
|Expected Output|lat1a3tlqd07aps8tjsegz967gdq686qttk2e2p4kw|



|Number|EVM_0_001_002_001|
|:----|:----|
|Test Item|Context|
|Title|get message data|
|Priority|1|
|Precondition|1. deploy contracts|
|Input|    |
|Operation Steps|call method **_msgData**|
|Expected Output|sent data|

## Ownerable

|Number|EVM_0_002_001_001|
|:----|:----|
|Test Item|Ownable|
|Title|get owner of contract|
|Priority|1|
|Precondition|1. deploy contracts|
|Input|    |
|Operation Steps|1. call method **owner**|
|Expected Output|lat1ar0s6re3qpe3rt39523qw4jars6s4sdhak459n|



|Number|EVM_0_002_002_001|
|:----|:----|
|Test Item|Ownable|
|Title|call methods decorated by onlyOwner with account that is not owner|
|Priority|1|
|Precondition|1. deploy contracts|
|Input|    |
|Operation Steps|1. call any method decorated by **onlyOwner** with account that is not owner|
|Expected Output|throws|



|Number|EVM_0_002_002_002|
|:----|:----|
|Test Item|Ownable|
|Title|call methods decorated by onlyOwner with account  owner|
|Priority|1|
|Precondition|1. deploy contracts|
|Input|    |
|Operation Steps|1. call any method decorated by **onlyOwner** with account  owner|
|Expected Output|none|



|Number|EVM_0_002_003_001|
|:----|:----|
|Test Item|Ownable|
|Title|judge if an account is owner|
|Priority|1|
|Precondition|1. deploy contracts|
|Input|lat1ar0s6re3qpe3rt39523qw4jars6s4sdhak459n|
|Operation Steps|1. call method **isOwner**|
|Expected Output|true|



|Number|EVM_0_002_003_002|
|:----|:----|
|Test Item|Ownable|
|Title|judge if an account is owner|
|Priority|1|
|Precondition|1. deploy contracts|
|Input|lat1a3tlqd07aps8tjsegz967gdq686qttk2e2p4kw|
|Operation Steps|1. call method **isOwner**|
|Expected Output|false|



|Number|EVM_0_002_004_001|
|:----|:----|
|Test Item|Ownable|
|Title|renounce owner permission|
|Priority|1|
|Precondition|1. deploy contracts|
|Input|    |
|Operation Steps|1. call method **renounceOwnership**|
|Expected Output|trigger OwnershipTransferred event|



|Number|EVM_0_002_005_001|
|:----|:----|
|Test Item|Ownable|
|Title|transfer owner permission|
|Priority|1|
|Precondition|1. deploy contracts|
|Input|0|
|Operation Steps|1. call method **transferOwnership**|
|Expected Output|throws|



|Number|EVM_0_002_005_002|
|:----|:----|
|Test Item|Ownable|
|Title|transfer owner permission|
|Priority|1|
|Precondition|1. deploy contracts|
|Input|lat1a3tlqd07aps8tjsegz967gdq686qttk2e2p4kw|
|Operation Steps|1. call method **isOwner**|
|Expected Output|trigger OwnershipTransferred event|

## SafeMath

|Number|EVM_0_003_001_001|
|:----|:----|
|Test Item|SafeMath|
|Title| add                 |
|Priority|1|
|Precondition|1. deploy contracts|
|Input|    |
|Operation Steps|1. call method **add**|
|Expected Output|throws|



|Number|EVM_0_003_001_002|
|:----|:----|
|Test Item|SafeMath|
|Title| add                 |
|Priority|1|
|Precondition|1. deploy contracts|
|Input|1.500<br>2.1000|
|Operation Steps|1. call method **add**|
|Expected Output|1500|



|Number|EVM_0_003_002_001|
|:----|:----|
|Test Item|SafeMath|
|Title|sub|
|Priority|1|
|Precondition|1. deploy contracts|
|Input|1.500<br>2.1000|
|Operation Steps|1. call method **sub**|
|Expected Output|throws|



|Number|EVM_0_003_002_002|
|:----|:----|
|Test Item|SafeMath|
|Title|sub|
|Priority|1|
|Precondition|1. deploy contracts|
|Input|1.1500<br>2.1000|
|Operation Steps|1. call method **sub**|
|Expected Output|500|

## PRC20

|Number|EVM_0_004_001_001|
|:----|:----|
|Test Item|PRC20|
|Title|get the total supply of token|
|Priority|1|
|Precondition|1. deploy contracts|
|Input|    |
|Operation Steps|1. call method **totalSupply**|
|Expected Output|the total supply|



|Number|EVM_0_004_002_001|
|:----|:----|
|Test Item|PRC20|
|Title|get balance of an account|
|Priority|1|
|Precondition|1. deploy contracts|
|Input|lat1a3tlqd07aps8tjsegz967gdq686qttk2e2p4kw|
|Operation Steps|1. call method **balanceOf**|
|Expected Output|balance of account "lat1a3tlqd07aps8tjsegz967gdq686qttk2e2p4kw"|



|Number|EVM_0_004_003_001|
|:----|:----|
|Test Item|PRC20|
|Title|transfer|
|Priority|1|
|Precondition|1. deploy contracts|
|Input|1. 0<br>2. lat1ar0s6re3qpe3rt39523qw4jars6s4sdhak459n<br>3. 1000000000000000000|
|Operation Steps|1. call method **_transfer**|
|Expected Output|throws|



|Number|EVM_0_004_003_002|
|:----|:----|
|Test Item|PRC20|
|Title|transfer|
|Priority|1|
|Precondition|1. deploy contracts|
|Input|1. lat1a3tlqd07aps8tjsegz967gdq686qttk2e2p4kw<br>2. 0<br>3. 1000000000000000000|
|Operation Steps|1. call method **_transfer**|
|Expected Output|throws|



|Number|EVM_0_004_003_003|
|:----|:----|
|Test Item|PRC20|
|Title|transfer|
|Priority|1|
|Precondition|1. deploy contracts|
|Input|1. lat1a3tlqd07aps8tjsegz967gdq686qttk2e2p4kw<br>2. lat1ar0s6re3qpe3rt39523qw4jars6s4sdhak459n<br>3. 1000000000000000000|
|Operation Steps|1. call method **_transfer**|
|Expected Output|trigger Transfer event|



|Number|EVM_0_004_004_001|
|:----|:----|
|Test Item|PRC20|
|Title|mint|
|Priority|1|
|Precondition|1. deploy contracts|
|Input|1. 0<br>2. 1000000000000000000|
|Operation Steps|1. call method **_mint**|
|Expected Output|throws|



|Number|EVM_0_004_004_002|
|:----|:----|
|Test Item|PRC20|
|Title|mint|
|Priority|1|
|Precondition|1. deploy contracts|
|Input|1. lat1a3tlqd07aps8tjsegz967gdq686qttk2e2p4kw<br>2. 1000000000000000000|
|Operation Steps|1. call method **_mint**|
|Expected Output|trigger Transfer event|



|Number|EVM_0_004_005_001|
|:----|:----|
|Test Item|PRC20|
|Title|burn|
|Priority|1|
|Precondition|1. deploy contracts|
|Input|1. 0<br>2. 1000000000000000000|
|Operation Steps|1. call method **_burn**|
|Expected Output|throws|



|Number|EVM_0_004_005_002|
|:----|:----|
|Test Item|PRC20|
|Title|burn|
|Priority|1|
|Precondition|1. deploy contracts|
|Input|1. lat1a3tlqd07aps8tjsegz967gdq686qttk2e2p4kw<br>2. 1000000000000000000|
|Operation Steps|1. call method **_burn**|
|Expected Output|trigger Transfer|



|Number|EVM_0_004_006_001|
|:----|:----|
|Test Item|PRC20|
|Title|approve|
|Priority|1|
|Precondition|1. deploy contracts|
|Input|1. 0<br>2. lat1ar0s6re3qpe3rt39523qw4jars6s4sdhak459n<br>3. 1000000000000000000|
|Operation Steps|1. call method **_approve**|
|Expected Output|throws|



|Number|EVM_0_004_006_002|
|:----|:----|
|Test Item|PRC20|
|Title|approve|
|Priority|1|
|Precondition|1. deploy contracts|
|Input|1. lat1a3tlqd07aps8tjsegz967gdq686qttk2e2p4kw<br>2. 0<br>3. 1000000000000000000|
|Operation Steps|1. call method **_approve**|
|Expected Output|throws|



|Number|EVM_0_004_006_003|
|:----|:----|
|Test Item|PRC20|
|Title|approve|
|Priority|1|
|Precondition|1. deploy contracts|
|Input|1. lat1a3tlqd07aps8tjsegz967gdq686qttk2e2p4kw<br>2. lat1ar0s6re3qpe3rt39523qw4jars6s4sdhak459n<br>3. 1000000000000000000|
|Operation Steps|1. call method **_approve**|
|Expected Output|trigger Approval event|



|Number|EVM_0_004_007_001|
|:----|:----|
|Test Item|PRC20|
|Title|transfer|
|Priority|1|
|Precondition|1. deploy contracts|
|Input|1. lat1ar0s6re3qpe3rt39523qw4jars6s4sdhak459n<br>2. 1000000000000000000|
|Operation Steps|1. call method **transfer** with account "lat1a3tlqd07aps8tjsegz967gdq686qttk2e2p4kw"|
|Expected Output|true|



|Number|EVM_0_004_008_001|
|:----|:----|
|Test Item|PRC20|
|Title|get allowance amount|
|Priority|1|
|Precondition|1. deploy contracts|
|Input|1.  lat1a3tlqd07aps8tjsegz967gdq686qttk2e2p4kw<br>2. lat1ar0s6re3qpe3rt39523qw4jars6s4sdhak459n|
|Operation Steps|1. call method **allowance**|
|Expected Output|the allowance amount of account "lat1ar0s6re3qpe3rt39523qw4jars6s4sdhak459n" over account "lat1a3tlqd07aps8tjsegz967gdq686qttk2e2p4kw"|



|Number|EVM_0_004_009_001|
|:----|:----|
|Test Item|PRC20|
|Title|approve|
|Priority|1|
|Precondition|1. deploy contracts|
|Input|1. lat1ar0s6re3qpe3rt39523qw4jars6s4sdhak459n<br>2. 1000000000000000000|
|Operation Steps|1. call method approve with account "lat1a3tlqd07aps8tjsegz967gdq686qttk2e2p4kw"|
|Expected Output|true|



|Number|EVM_0_004_010_001|
|:----|:----|
|Test Item|PRC20|
|Title|transfer from other account|
|Priority|1|
|Precondition|1. deploy contracts|
|Input|1. lat1ar0s6re3qpe3rt39523qw4jars6s4sdhak459n<br>2. lat18ed0nl3vx8x4n9nwg5474rg5wg0kuewknus0q9<br>3. 1000000000000000000|
|Operation Steps|1. call method **transferFrom** with account "lat1a3tlqd07aps8tjsegz967gdq686qttk2e2p4kw"|
|Expected Output|true|



|Number|EVM_0_004_011_001|
|:----|:----|
|Test Item|PRC20|
|Title|increase allowance amount|
|Priority|1|
|Precondition|1. deploy contracts|
|Input|1. lat1ar0s6re3qpe3rt39523qw4jars6s4sdhak459n<br>2. 1000000000000000000|
|Operation Steps|1. call method **increaseAllowance** with account "lat1a3tlqd07aps8tjsegz967gdq686qttk2e2p4kw"|
|Expected Output|true|



|Number|EVM_0_004_012_001|
|:----|:----|
|Test Item|PRC20|
|Title|decrease allowance amount|
|Priority|1|
|Precondition|1. deploy contracts|
|Input|1. lat1ar0s6re3qpe3rt39523qw4jars6s4sdhak459n<br>2. 1000000000000000000|
|Operation Steps|1. call method **decreaseAllowance** with account "lat1a3tlqd07aps8tjsegz967gdq686qttk2e2p4kw"|
|Expected Output|true|

## DanteToken

|Number|EVM_0_005_001_001|
|:----|:----|
|Test Item|DanteToken|
|Title| get name of token   |
|Priority|1|
|Precondition|1. deploy contracts|
|Input|    |
|Operation Steps|1. call method **name**|
|Expected Output|DANTE|



|Number|EVM_0_005_002_001|
|:----|:----|
|Test Item|DanteToken|
|Title|get symbol of token|
|Priority|1|
|Precondition|1. deploy contracts|
|Input|    |
|Operation Steps|1. call method **symbol**|
|Expected Output|DAT|



|Number|EVM_0_005_003_001|
|:----|:----|
|Test Item|DanteToken|
|Title| get decimals of token   |
|Priority|1|
|Precondition|1. deploy contracts|
|Input|    |
|Operation Steps|1. call method **decimals**|
|Expected Output|18|



|Number|EVM_0_005_004_001|
|:----|:----|
|Test Item|DanteToken|
|Title|mint|
|Priority|1|
|Precondition|1. deploy contracts|
|Input|1. lat1a3tlqd07aps8tjsegz967gdq686qttk2e2p4kw<br>2. 1000000000000000000|
|Operation Steps|1. call method **mint** with account "lat1ar0s6re3qpe3rt39523qw4jars6s4sdhak459n"|
|Expected Output|none|



|Number|EVM_0_005_005_001|
|:----|:----|
|Test Item|DanteToken|
|Title|burn|
|Priority|1|
|Precondition|1. deploy contracts|
|Input|1. lat1a3tlqd07aps8tjsegz967gdq686qttk2e2p4kw<br>2. 1000000000000000000|
|Operation Steps|1. call method **burn** with account "lat1ar0s6re3qpe3rt39523qw4jars6s4sdhak459n"|
|Expected Output|none|

## DanteTokenLockedBase

|Number|EVM_0_006_001_001|
|:----|:----|
|Test Item|DanteTokenLockedBase|
|Title|get name of token|
|Priority|1|
|Precondition|1. deploy contracts|
|Input|    |
|Operation Steps|1. call method **name**|
|Expected Output|Dante Test|



|Number|EVM_0_006_002_001|
|:----|:----|
|Test Item|DanteTokenLockedBase|
|Title|get symbol of token|
|Priority|1|
|Precondition|1. deploy contracts|
|Input|    |
|Operation Steps|1. call method **symbol**|
|Expected Output|DAT-Test|




|Number|EVM_0_006_003_001|
|:----|:----|
|Test Item|DanteTokenLockedBase|
|Title|get decimals of token|
|Priority|1|
|Precondition|1. deploy contracts|
|Input|    |
|Operation Steps|1. call method **decimals**|
|Expected Output|18|




|Number|EVM_0_006_004_001|
|:----|:----|
|Test Item|DanteTokenLockedBase|
|Title|get balance of an account|
|Priority|1|
|Precondition|1. deploy contracts|
|Input|1. lat1a3tlqd07aps8tjsegz967gdq686qttk2e2p4kw|
|Operation Steps|1. call method **balanceOf**|
|Expected Output|balance of account "lat1a3tlqd07aps8tjsegz967gdq686qttk2e2p4kw"|




|Number|EVM_0_006_005_001|
|:----|:----|
|Test Item|DanteTokenLockedBase|
|Title| get total supply of token  |
|Priority|1|
|Precondition|1. deploy contracts|
|Input|    |
|Operation Steps|1. call method **totalSupply**|
|Expected Output|total supply of token|




|Number|EVM_0_006_006_001|
|:----|:----|
|Test Item|DanteTokenLockedBase|
|Title|mint|
|Priority|1|
|Precondition|1. deploy contracts|
|Input|1. 0<br>2. 1000000000000000000|
|Operation Steps|1. call method **mint** of account "lat1ar0s6re3qpe3rt39523qw4jars6s4sdhak459n"|
|Expected Output|throws|




|Number|EVM_0_006_006_002|
|:----|:----|
|Test Item|DanteTokenLockedBase|
|Title|mint|
|Priority|1|
|Precondition|1. deploy contracts|
|Input|1. lat1a3tlqd07aps8tjsegz967gdq686qttk2e2p4kw<br>2. 1000000000000000000|
|Operation Steps|call method **mint** with account "lat1ar0s6re3qpe3rt39523qw4jars6s4sdhak459n"|
|Expected Output|trigger Transfer event|




|Number|EVM_0_006_006_001|
|:----|:----|
|Test Item|DanteTokenLockedBase|
|Title|burn|
|Priority|1|
|Precondition|1. deploy contracts|
|Input|1. 0<br>2. 1000000000000000000|
|Operation Steps|call method **burn** with account "lat1ar0s6re3qpe3rt39523qw4jars6s4sdhak459n"|
|Expected Output|throws|




|Number|EVM_0_006_006_001|
|:----|:----|
|Test Item|DanteTokenLockedBase|
|Title|burn|
|Priority|1|
|Precondition|1. deploy contracts|
|Input|1. lat1a3tlqd07aps8tjsegz967gdq686qttk2e2p4kw<br>2. 1000000000000000000|
|Operation Steps|call method **burn** with account "lat1ar0s6re3qpe3rt39523qw4jars6s4sdhak459n"|
|Expected Output|trigger Transfer event|




|Number|EVM_0_006_007_001|
|:----|:----|
|Test Item|DanteTokenLockedBase|
|Title|transfer|
|Priority|1|
|Precondition|1. deploy contracts|
|Input|1. lat1a3tlqd07aps8tjsegz967gdq686qttk2e2p4kw<br>2. 1000000000000000000|
|Operation Steps|call method **transfer**|
|Expected Output|throws|




|Number|EVM_0_006_008_001|
|:----|:----|
|Test Item|DanteTokenLockedBase|
|Title|get allowance amount|
|Priority|1|
|Precondition|1. deploy contracts|
|Input|1. lat1a3tlqd07aps8tjsegz967gdq686qttk2e2p4kw<br>2. lat1ar0s6re3qpe3rt39523qw4jars6s4sdhak459n|
|Operation Steps|call method **allowance**|
|Expected Output|0|




|Number|EVM_0_006_009_001|
|:----|:----|
|Test Item|DanteTokenLockedBase|
|Title|approve|
|Priority|1|
|Precondition|1. deploy contracts|
|Input|1. lat1a3tlqd07aps8tjsegz967gdq686qttk2e2p4kw<br>2. 1000000000000000000|
|Operation Steps|call method **approve** with account "lat1ar0s6re3qpe3rt39523qw4jars6s4sdhak459n"|
|Expected Output|throws|




|Number|EVM_0_006_010_001|
|:----|:----|
|Test Item|DanteTokenLockedBase|
|Title| transfer from other account                                  |
|Priority|1|
|Precondition|1. deploy contracts|
|Input|1. lat1a3tlqd07aps8tjsegz967gdq686qttk2e2p4kw<br>2. lat1ar0s6re3qpe3rt39523qw4jars6s4sdhak459n<br>3. 1000000000000000000|
|Operation Steps|call method **transferFrom**|
|Expected Output|throws|


# Acceptance Test


### DanteTokenTest

|Number|EVM_1_002_001_001|
|:----|:----|
|Test Item|deploy contracts|
|Title|deploy contracts|
|Priority|1|
|Precondition|    |
|Input|1. the code of contract DanteTokenTest|
|Operation Steps|1. deploy contract with account "lat1ar0s6re3qpe3rt39523qw4jars6s4sdhak459n"<br>2. get owner of contract|
|Expected Output|lat1ar0s6re3qpe3rt39523qw4jars6s4sdhak459n|



|Number|EVM_1_002_002_001|
|:----|:----|
|Test Item|call contracts|
|Title|get name of token|
|Priority|1|
|Precondition|EVM_1_002_001_001|
|Input|    |
|Operation Steps|1. call method **name**|
|Expected Output|Dante Test|




|Number|EVM_1_002_002_002|
|:----|:----|
|Test Item|call contracts|
|Title|get symbol of token|
|Priority|1|
|Precondition|EVM_1_002_001_001|
|Input|    |
|Operation Steps|1. call method **symbol**|
|Expected Output|DAT-Test|




|Number|EVM_1_002_002_003|
|:----|:----|
|Test Item|call contracts|
|Title|get decimals of token|
|Priority|1|
|Precondition|EVM_1_002_001_001|
|Input|    |
|Operation Steps|1. call method **decimals**|
|Expected Output|18|




|Number|EVM_1_002_002_004|
|:----|:----|
|Test Item|call contracts|
|Title|mint|
|Priority|1|
|Precondition|EVM_1_002_001_001|
|Input|1. lat1a3tlqd07aps8tjsegz967gdq686qttk2e2p4kw<br>2. 100000000000000000000|
|Operation Steps|1. call method with **account** "lat1a3tlqd07aps8tjsegz967gdq686qttk2e2p4kw"<br>2. get balance of lat1a3tlqd07aps8tjsegz967gdq686qttk2e2p4kw<br>3. get total supply|
|Expected Output|throws, balance of lat1a3tlqd07aps8tjsegz967gdq686qttk2e2p4kw is the same with that before calling|




|Number|EVM_1_002_002_005|
|:----|:----|
|Test Item|call contracts|
|Title|mint|
|Priority|1|
|Precondition|EVM_1_002_001_001|
|Input|1. lat1a3tlqd07aps8tjsegz967gdq686qttk2e2p4kw<br>2. 100000000000000000000|
|Operation Steps|1. call method **mint** with account "lat1ar0s6re3qpe3rt39523qw4jars6s4sdhak459n"<br>2. get balance of account "lat1a3tlqd07aps8tjsegz967gdq686qttk2e2p4kw"<br>3. get total supply|
|Expected Output|successfully, total supply increase by 100000000000000000000, balance of account "lat1a3tlqd07aps8tjsegz967gdq686qttk2e2p4kw" increase by 100000000000000000000|




|Number|EVM_1_002_002_006|
|:----|:----|
|Test Item|call contracts|
|Title|burn|
|Priority|1|
|Precondition|EVM_1_002_002_005|
|Input|1. lat1a3tlqd07aps8tjsegz967gdq686qttk2e2p4kw<br>2. 1000000000000000000|
|Operation Steps|1. call method **burn** with account "lat1a3tlqd07aps8tjsegz967gdq686qttk2e2p4kw"<br>2. get balance of account "lat1a3tlqd07aps8tjsegz967gdq686qttk2e2p4kw"<br>3. get total supply|
|Expected Output|throws, total supply and balance of account "lat1a3tlqd07aps8tjsegz967gdq686qttk2e2p4kw" is the same with that before calling|




|Number|EVM_1_002_002_007|
|:----|:----|
|Test Item|call contracts|
|Title|burn|
|Priority|1|
|Precondition|EVM_1_002_002_005|
|Input|1. lat1a3tlqd07aps8tjsegz967gdq686qttk2e2p4kw<br>2. 1000000000000000000000|
|Operation Steps|1. call method **burn** with account "lat1ar0s6re3qpe3rt39523qw4jars6s4sdhak459n"<br>2. get balance of account "lat1a3tlqd07aps8tjsegz967gdq686qttk2e2p4kw"<br>3. get total supply|
|Expected Output|throws, total supply and balance of account "lat1a3tlqd07aps8tjsegz967gdq686qttk2e2p4kw" is the same with that before calling|




|Number|EVM_1_002_002_008|
|:----|:----|
|Test Item|call contracts|
|Title|burn|
|Priority|1|
|Precondition|EVM_1_002_002_005|
|Input|1. lat1a3tlqd07aps8tjsegz967gdq686qttk2e2p4kw<br>2. 1000000000000000000|
|Operation Steps|1. call method **burn** with account "lat1ar0s6re3qpe3rt39523qw4jars6s4sdhak459n"<br>2. get balance of account "lat1a3tlqd07aps8tjsegz967gdq686qttk2e2p4kw"<br>3. get total supply|
|Expected Output|successfully, total supply and account "lat1a3tlqd07aps8tjsegz967gdq686qttk2e2p4kw" decrease by 1000000000000000000|




|Number|EVM_1_002_002_009|
|:----|:----|
|Test Item|call contracts|
|Title|transfer|
|Priority|1|
|Precondition|EVM_1_002_002_005|
|Input|1. lat1a3tlqd07aps8tjsegz967gdq686qttk2e2p4kw<br>2. 1000000000000000000|
|Operation Steps|1. call method **transfer** with account "lat1a3tlqd07aps8tjsegz967gdq686qttk2e2p4kw"<br>2. get balance of account "lat1a3tlqd07aps8tjsegz967gdq686qttk2e2p4kw"<br>3. get balance of account "lat1ar0s6re3qpe3rt39523qw4jars6s4sdhak459n"|
|Expected Output|throws, balance of account "lat1ar0s6re3qpe3rt39523qw4jars6s4sdhak459n" and "lat1a3tlqd07aps8tjsegz967gdq686qttk2e2p4kw" do not change|



| Number          | EVM_1_002_002_010                                            |
| :-------------- | :----------------------------------------------------------- |
| Test Item       | call contracts                                               |
| Title           | transfer                                                     |
| Priority        | 1                                                            |
| Precondition    | EVM_1_002_002_005                                            |
| Input           | 1. lat1a3tlqd07aps8tjsegz967gdq686qttk2e2p4kw<br>2. 1000000000000000000 |
| Operation Steps | 1. call method **transfer** with account "lat1ar0s6re3qpe3rt39523qw4jars6s4sdhak459n"<br>2. get balance of account "lat1a3tlqd07aps8tjsegz967gdq686qttk2e2p4kw"<br>3. get balance of account "lat1ar0s6re3qpe3rt39523qw4jars6s4sdhak459n" |
| Expected Output | successfully, balance of account "lat1ar0s6re3qpe3rt39523qw4jars6s4sdhak459n" decrease by 1000000000000000000 and balance of account "lat1a3tlqd07aps8tjsegz967gdq686qttk2e2p4kw" increase by 1000000000000000000 |


|Number|EVM_1_002_002_010|
|:----|:----|
|Test Item|call contracts|
|Title|approve|
|Priority|1|
|Precondition|EVM_1_002_002_005|
|Input|1. lat1a3tlqd07aps8tjsegz967gdq686qttk2e2p4kw<br>2. 1000000000000000000|
|Operation Steps|1. call method **approve** with account "lat1ar0s6re3qpe3rt39523qw4jars6s4sdhak459n"<br>2. get allowance of account "lat1a3tlqd07aps8tjsegz967gdq686qttk2e2p4kw" over account "lat1ar0s6re3qpe3rt39523qw4jars6s4sdhak459n"|
|Expected Output|throws, allowance of account "lat1a3tlqd07aps8tjsegz967gdq686qttk2e2p4kw" over account "lat1ar0s6re3qpe3rt39523qw4jars6s4sdhak459n" is 0|




|Number|EVM_1_002_002_012|
|:----|:----|
|Test Item|call contracts|
|Title|transferFrom|
|Priority|1|
|Precondition|EVM_1_002_002_005|
|Input|1. lat1ar0s6re3qpe3rt39523qw4jars6s4sdhak459n<br>2. lat1a3tlqd07aps8tjsegz967gdq686qttk2e2p4kw<br>3. 1000000000000000000|
|Operation Steps|1. call method **transferFrom** with account "lat1a3tlqd07aps8tjsegz967gdq686qttk2e2p4kw"<br>2. get allowance of account "lat1a3tlqd07aps8tjsegz967gdq686qttk2e2p4kw" over account "lat1ar0s6re3qpe3rt39523qw4jars6s4sdhak459n"<br>3. get balance of account "lat1a3tlqd07aps8tjsegz967gdq686qttk2e2p4kw"|
|Expected Output|throws, allowance of account "lat1a3tlqd07aps8tjsegz967gdq686qttk2e2p4kw" over account "lat1ar0s6re3qpe3rt39523qw4jars6s4sdhak459n" and balance of account "lat1a3tlqd07aps8tjsegz967gdq686qttk2e2p4kw" do not change|




|Number|EVM_1_002_003_001|
|:----|:----|
|Test Item|transferOwnership|
|Title|transferOwnership|
|Priority|1|
|Precondition|EVM_1_002_001_001|
|Input|1. lat1a3tlqd07aps8tjsegz967gdq686qttk2e2p4kw|
|Operation Steps|1. call method **transferOwnership** with account "lat1a3tlqd07aps8tjsegz967gdq686qttk2e2p4kw"<br>2. get owner of contract|
|Expected Output|throws, the owner of the contract is "lat1ar0s6re3qpe3rt39523qw4jars6s4sdhak459n"|




|Number|EVM_1_002_003_002|
|:----|:----|
|Test Item|transferOwnership|
|Title|transferOwnership|
|Priority|1|
|Precondition|EVM_1_002_001_001|
|Input|1. lat1a3tlqd07aps8tjsegz967gdq686qttk2e2p4kw|
|Operation Steps|1. call method **transferOwnership** with account "lat1ar0s6re3qpe3rt39523qw4jars6s4sdhak459n"<br>2. get owner of contract|
|Expected Output|successfully, the owner of the contract is "lat1ar0s6re3qpe3rt39523qw4jars6s4sdhak459n"|




|Number|EVM_1_002_003_003|
|:----|:----|
|Test Item|transferOwnership|
|Title|renounceOwnership|
|Priority|1|
|Precondition|EVM_1_002_001_001|
|Input|1. lat1a3tlqd07aps8tjsegz967gdq686qttk2e2p4kw|
|Operation Steps|1. call method **renounceOwnership** with account "lat1a3tlqd07aps8tjsegz967gdq686qttk2e2p4kw"<br>2. get owner of contract|
|Expected Output|throws, the owner of the contract is "lat1ar0s6re3qpe3rt39523qw4jars6s4sdhak459n"|




|Number|EVM_1_002_003_003|
|:----|:----|
|Test Item|transferOwnership|
|Title|renounceOwnership|
|Priority|1|
|Precondition|EVM_1_002_001_001|
|Input|1. lat1a3tlqd07aps8tjsegz967gdq686qttk2e2p4kw|
|Operation Steps|1. call method **renounceOwnership** with account "lat1ar0s6re3qpe3rt39523qw4jars6s4sdhak459n"<br>2. get owner of contract|
|Expected Output|successfully, the owner of the contract is 0|





