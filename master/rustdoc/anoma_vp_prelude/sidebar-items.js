initSidebarItems({"attr":[["validity_predicate","Generate WASM binding for validity predicate main entrypoint function."]],"derive":[["BorshDeserialize",""],["BorshSerialize",""]],"enum":[["Address","An account’s address"]],"fn":[["eval","Evaluate a validity predicate with given data. The address, changed storage keys and verifiers will have the same values as the input to caller’s validity predicate."],["get_block_epoch","Get epoch of the current block"],["get_block_hash","Get a block hash"],["get_block_height","Get height of the current block"],["get_chain_id","Get the chain ID"],["get_tx_code_hash","Get a tx hash"],["has_key_post","Check if the given key is present in storage after transaction execution."],["has_key_pre","Check if the given key was present in storage before transaction execution."],["is_tx_whitelisted",""],["is_vp_whitelisted",""],["iter_prefix_post","Get an iterator with the given prefix after transaction execution"],["iter_prefix_pre","Get an iterator with the given prefix before transaction execution"],["log_string","Log a string. The message will be printed at the `tracing::Level::Info`."],["read_bytes_post","Try to read a variable-length value as bytes at the given key from storage after transaction execution."],["read_bytes_pre","Try to read a variable-length value as bytesat the given key from storage before transaction execution."],["read_bytes_temp","Try to read a variable-length value as bytes at the given key from storage before transaction execution."],["read_post","Try to read a Borsh encoded variable-length value at the given key from storage after transaction execution."],["read_pre","Try to read a Borsh encoded variable-length value at the given key from storage before transaction execution."],["read_temp","Try to read a Borsh encoded variable-length value at the given key from storage before transaction execution."],["sha256",""],["verify_tx_signature","Verify a transaction signature. The signature is expected to have been produced on the encoded transaction [`anoma::proto::Tx`] using [`anoma::proto::Tx::sign`]."]],"macro":[["debug_log","Log a string in a debug build. The message will be printed at the `tracing::Level::Info`. Any `debug_log!` statements are only enabled in non optimized builds by default. An optimized build will not execute `debug_log!` statements unless `-C debug-assertions` is passed to the compiler."]],"mod":[["address","Implements transparent addresses as described in Accounts Addresses."],["chain","Chain related data types"],["dylib","Dynamic library helpers"],["governance","Files defyining the types used in governance."],["hash","Types for working with 32 bytes hashes."],["ibc","Types that are used in IBC."],["intent","Vp imports and functions."],["internal","Shared internal types between the host env and guest (wasm)."],["key","Vp imports and functions."],["matchmaker","Matchmaker types"],["nft","A Nft validity predicate"],["parameters","Protocol parameters"],["proof_of_stake","Proof-of-Stake integration as a native validity predicate"],["storage","Storage types"],["time","Types for dealing with time and durations."],["token","Vp imports and functions."],["transaction","Types that are used in transactions."],["validity_predicate","Types that are used in validity predicates."]],"struct":[["BTreeSet","A set based on a B-Tree."],["HashSet","A hash set implemented as a `HashMap` where the value is `()`."],["PostKeyValIterator",""],["PreKeyValIterator",""],["Signed","A generic signed data wrapper for Borsh encode-able data."],["SignedTxData","This can be used to sign an arbitrary tx. The signature is produced and verified on the tx data concatenated with the tx code, however the tx code itself is not part of this structure."]],"trait":[["BorshDeserialize","A data-structure that can be de-serialized from binary format by NBOR."],["BorshSerialize","A data-structure that can be serialized into binary format by NBOR."],["Digest","Convinience wrapper trait covering functionality of cryptographic hash functions with fixed output size."]],"type":[["Sha256","SHA-256 hasher."],["Sha384","SHA-384 hasher."],["Sha512","SHA-512 hasher."]]});