var searchIndex = {};
searchIndex['phf'] = {"items":[[0,"","phf","Compile time optimized maps and sets."],[8,"PhfHash","","A trait implemented by types which can be used in PHF data structures"],[10,"phf_hash","","Hashes the value of `self`, factoring in a seed",0],[3,"Map","","An immutable map constructed at compile time."],[3,"Set","","An immutable set constructed at compile time."],[3,"OrderedMap","","An order-preserving immutable map constructed at compile time."],[3,"OrderedSet","","An order-preserving immutable set constructed at compile time."],[0,"map","","An immutable map constructed at compile time."],[3,"Map","phf::map","An immutable map constructed at compile time."],[3,"Entries","","An iterator over the key/value pairs in a `Map`."],[3,"Keys","","An iterator over the keys in a `Map`."],[3,"Values","","An iterator over the values in a `Map`."],[11,"fmt","","",1],[6,"Output","",""],[11,"index","","",1],[11,"is_empty","","Returns true if the `Map` is empty.",1],[11,"len","","Returns the number of entries in the `Map`.",1],[11,"contains_key","","Determines if `key` is in the `Map`.",1],[11,"get","","Returns a reference to the value that `key` maps to.",1],[11,"get_key","","Returns a reference to the map's internal static instance of the given\nkey.",1],[11,"get_entry","","Like `get`, but returns both the key and the value.",1],[11,"entries","","Returns an iterator over the key/value pairs in the map.",1],[11,"keys","","Returns an iterator over the keys in the map.",1],[11,"values","","Returns an iterator over the values in the map.",1],[6,"IntoIter","",""],[6,"Item","",""],[11,"next","","",2],[11,"size_hint","","",2],[11,"next_back","","",2],[6,"Item","",""],[11,"next","","",3],[11,"size_hint","","",3],[11,"next_back","","",3],[6,"Item","",""],[11,"next","","",4],[11,"size_hint","","",4],[11,"next_back","","",4],[0,"set","phf","An immutable set constructed at compile time."],[3,"Set","phf::set","An immutable set constructed at compile time."],[3,"Iter","","An iterator over the values in a `Set`."],[11,"fmt","","",5],[11,"len","","Returns the number of elements in the `Set`.",5],[11,"is_empty","","Returns true if the `Set` contains no elements.",5],[11,"get_key","","Returns a reference to the set's internal static instance of the given\nkey.",5],[11,"contains","","Returns true if `value` is in the `Set`.",5],[11,"iter","","Returns an iterator over the values in the set.",5],[11,"is_disjoint","","Returns true if `other` shares no elements with `self`.",5],[11,"is_subset","","Returns true if `other` contains all values in `self`.",5],[11,"is_superset","","Returns true if `self` contains all values in `other`.",5],[6,"IntoIter","",""],[6,"Item","",""],[11,"next","","",6],[11,"size_hint","","",6],[11,"next_back","","",6],[0,"ordered_map","phf","An order-preserving immutable map constructed at compile time."],[3,"OrderedMap","phf::ordered_map","An order-preserving immutable map constructed at compile time."],[3,"Entries","","An iterator over the entries in a `OrderedMap`."],[3,"Keys","","An iterator over the keys in a `OrderedMap`."],[3,"Values","","An iterator over the values in a `OrderedMap`."],[11,"fmt","","",7],[6,"Output","",""],[11,"index","","",7],[11,"len","","Returns the number of entries in the `Map`.",7],[11,"is_empty","","Returns true if the `Map` is empty.",7],[11,"get","","Returns a reference to the value that `key` maps to.",7],[11,"get_key","","Returns a reference to the map's internal static instance of the given\nkey.",7],[11,"contains_key","","Determines if `key` is in the `Map`.",7],[11,"get_index","","Returns the index of the key within the list used to initialize\nthe ordered map.",7],[11,"get_entry","","Like `get`, but returns both the key and the value.",7],[11,"entries","","Returns an iterator over the key/value pairs in the map.",7],[11,"keys","","Returns an iterator over the keys in the map.",7],[11,"values","","Returns an iterator over the values in the map.",7],[6,"IntoIter","",""],[6,"Item","",""],[11,"next","","",8],[11,"size_hint","","",8],[11,"next_back","","",8],[11,"indexable","","",8],[11,"idx","","",8],[6,"Item","",""],[11,"next","","",9],[11,"size_hint","","",9],[11,"next_back","","",9],[11,"indexable","","",9],[11,"idx","","",9],[6,"Item","",""],[11,"next","","",10],[11,"size_hint","","",10],[11,"next_back","","",10],[11,"indexable","","",10],[11,"idx","","",10],[0,"ordered_set","phf","An order-preserving immutable set constructed at compile time."],[3,"OrderedSet","phf::ordered_set","An order-preserving immutable set constructed at compile time."],[3,"Iter","","An iterator over the values in a `OrderedSet`."],[11,"fmt","","",11],[11,"len","","Returns the number of elements in the `OrderedSet`.",11],[11,"is_empty","","Returns true if the `OrderedSet` contains no elements.",11],[11,"get_key","","Returns a reference to the set's internal static instance of the given\nkey.",11],[11,"get_index","","Returns the index of the key within the list used to initialize\nthe ordered set.",11],[11,"contains","","Returns true if `value` is in the `Set`.",11],[11,"iter","","Returns an iterator over the values in the set.",11],[11,"is_disjoint","","Returns true if `other` shares no elements with `self`.",11],[11,"is_subset","","Returns true if `other` contains all values in `self`.",11],[11,"is_superset","","Returns true if `self` contains all values in `other`.",11],[6,"IntoIter","",""],[6,"Item","",""],[11,"next","","",12],[11,"size_hint","","",12],[11,"next_back","","",12],[11,"indexable","","",12],[11,"idx","","",12],[11,"fmt","core::num","",13],[11,"eq","","",13],[11,"ne","","",13],[11,"ne","","",13],[11,"eq","","",14],[11,"ne","","",14],[11,"ne","","",14],[11,"clone","","",14],[11,"clone_from","","",14],[11,"fmt","","",14],[11,"eq","","",15],[11,"ne","","",15],[11,"ne","","",15],[11,"clone","","",15],[11,"clone_from","","",15],[11,"fmt","","",15],[11,"fmt","","",14],[11,"description","","",14],[11,"cause","","",14],[11,"eq","","",16],[11,"ne","","",16],[11,"ne","","",16],[11,"clone","","",16],[11,"clone_from","","",16],[11,"fmt","","",16],[11,"eq","","",17],[11,"ne","","",17],[11,"ne","","",17],[11,"clone","","",17],[11,"clone_from","","",17],[11,"fmt","","",17],[11,"fmt","","",16],[11,"description","","",16],[11,"cause","","",16],[11,"hash","core::nonzero","",18],[11,"fmt","","",18],[11,"partial_cmp","","",18],[11,"lt","","",18],[11,"le","","",18],[11,"gt","","",18],[11,"ge","","",18],[11,"lt","","",18],[11,"le","","",18],[11,"gt","","",18],[11,"ge","","",18],[11,"cmp","","",18],[11,"eq","","",18],[11,"ne","","",18],[11,"ne","","",18],[11,"assert_receiver_is_total_eq","","",18],[11,"clone","","",18],[11,"clone_from","","",18],[11,"new","","Create an instance of NonZero with the provided value.\nYou must indeed ensure that the value is actually \"non-zero\".",18],[11,"deref","","",18],[11,"null","core::ptr","Returns a null Unique.",19],[11,"offset","","Return an (unsafe) pointer into the memory owned by `self`.",19],[11,"cmp","core::marker","",20],[11,"partial_cmp","","",20],[11,"lt","","",20],[11,"le","","",20],[11,"gt","","",20],[11,"ge","","",20],[11,"lt","","",20],[11,"le","","",20],[11,"gt","","",20],[11,"ge","","",20],[11,"assert_receiver_is_total_eq","","",20],[11,"eq","","",20],[11,"ne","","",20],[11,"ne","","",20],[11,"clone","","",20],[11,"clone_from","","",20],[11,"cmp","","",21],[11,"partial_cmp","","",21],[11,"lt","","",21],[11,"le","","",21],[11,"gt","","",21],[11,"ge","","",21],[11,"lt","","",21],[11,"le","","",21],[11,"gt","","",21],[11,"ge","","",21],[11,"assert_receiver_is_total_eq","","",21],[11,"eq","","",21],[11,"ne","","",21],[11,"ne","","",21],[11,"clone","","",21],[11,"clone_from","","",21],[11,"cmp","","",22],[11,"partial_cmp","","",22],[11,"lt","","",22],[11,"le","","",22],[11,"gt","","",22],[11,"ge","","",22],[11,"lt","","",22],[11,"le","","",22],[11,"gt","","",22],[11,"ge","","",22],[11,"assert_receiver_is_total_eq","","",22],[11,"eq","","",22],[11,"ne","","",22],[11,"ne","","",22],[11,"clone","","",22],[11,"clone_from","","",22],[11,"cmp","","",23],[11,"partial_cmp","","",23],[11,"lt","","",23],[11,"le","","",23],[11,"gt","","",23],[11,"ge","","",23],[11,"lt","","",23],[11,"le","","",23],[11,"gt","","",23],[11,"ge","","",23],[11,"assert_receiver_is_total_eq","","",23],[11,"eq","","",23],[11,"ne","","",23],[11,"ne","","",23],[11,"clone","","",23],[11,"clone_from","","",23],[11,"cmp","","",24],[11,"partial_cmp","","",24],[11,"lt","","",24],[11,"le","","",24],[11,"gt","","",24],[11,"ge","","",24],[11,"lt","","",24],[11,"le","","",24],[11,"gt","","",24],[11,"ge","","",24],[11,"assert_receiver_is_total_eq","","",24],[11,"eq","","",24],[11,"ne","","",24],[11,"ne","","",24],[11,"clone","","",24],[11,"clone_from","","",24],[11,"cmp","","",25],[11,"partial_cmp","","",25],[11,"lt","","",25],[11,"le","","",25],[11,"gt","","",25],[11,"ge","","",25],[11,"lt","","",25],[11,"le","","",25],[11,"gt","","",25],[11,"ge","","",25],[11,"assert_receiver_is_total_eq","","",25],[11,"eq","","",25],[11,"ne","","",25],[11,"ne","","",25],[11,"clone","","",25],[11,"clone_from","","",25],[11,"cmp","","",26],[11,"partial_cmp","","",26],[11,"lt","","",26],[11,"le","","",26],[11,"gt","","",26],[11,"ge","","",26],[11,"lt","","",26],[11,"le","","",26],[11,"gt","","",26],[11,"ge","","",26],[11,"assert_receiver_is_total_eq","","",26],[11,"eq","","",26],[11,"ne","","",26],[11,"ne","","",26],[11,"clone","","",26],[11,"clone_from","","",26],[11,"cmp","","",27],[11,"partial_cmp","","",27],[11,"lt","","",27],[11,"le","","",27],[11,"gt","","",27],[11,"ge","","",27],[11,"lt","","",27],[11,"le","","",27],[11,"gt","","",27],[11,"ge","","",27],[11,"assert_receiver_is_total_eq","","",27],[11,"eq","","",27],[11,"ne","","",27],[11,"ne","","",27],[11,"clone","","",27],[11,"clone_from","","",27],[11,"assert_receiver_is_total_eq","core::ops","",28],[11,"eq","","",28],[11,"ne","","",28],[11,"ne","","",28],[11,"clone","","",28],[11,"clone_from","","",28],[11,"fmt","","",28],[11,"assert_receiver_is_total_eq","","",29],[11,"eq","","",29],[11,"ne","","",29],[11,"ne","","",29],[11,"clone","","",29],[11,"clone_from","","",29],[11,"fmt","","",29],[11,"assert_receiver_is_total_eq","","",30],[11,"eq","","",30],[11,"ne","","",30],[11,"ne","","",30],[11,"clone","","",30],[11,"clone_from","","",30],[11,"fmt","","",30],[11,"assert_receiver_is_total_eq","","",31],[11,"eq","","",31],[11,"ne","","",31],[11,"ne","","",31],[11,"clone","","",31],[11,"clone_from","","",31],[11,"fmt","","",31],[11,"fmt","core::cmp","",32],[11,"eq","","",32],[11,"ne","","",32],[11,"ne","","",32],[11,"clone","","",32],[11,"clone_from","","",32],[11,"reverse","","Reverse the `Ordering`, so that `Less` becomes `Greater` and\nvice versa.",32],[11,"assert_receiver_is_total_eq","","",32],[11,"cmp","","",32],[11,"partial_cmp","","",32],[11,"lt","","",32],[11,"le","","",32],[11,"gt","","",32],[11,"ge","","",32],[11,"is","phf::core","Returns true if the boxed type is the same as `T`",33],[11,"downcast_ref","","Returns some reference to the boxed value if it is of type `T`, or\n`None` if it isn't.",33],[11,"downcast_mut","","Returns some mutable reference to the boxed value if it is of type `T`, or\n`None` if it isn't.",33],[11,"hash","core::any","",34],[11,"fmt","","",34],[11,"assert_receiver_is_total_eq","","",34],[11,"eq","","",34],[11,"ne","","",34],[11,"ne","","",34],[11,"clone","","",34],[11,"clone_from","","",34],[11,"of","","Returns the `TypeId` of the type this generic function has been\ninstantiated with",34],[11,"new","core::atomic","Creates a new `AtomicBool`.",35],[11,"load","","Loads a value from the bool.",35],[11,"store","","Stores a value into the bool.",35],[11,"swap","","Stores a value into the bool, returning the old value.",35],[11,"compare_and_swap","","Stores a value into the bool if the current value is the same as the expected value.",35],[11,"fetch_and","","Logical \"and\" with a boolean value.",35],[11,"fetch_nand","","Logical \"nand\" with a boolean value.",35],[11,"fetch_or","","Logical \"or\" with a boolean value.",35],[11,"fetch_xor","","Logical \"xor\" with a boolean value.",35],[11,"new","","Creates a new `AtomicIsize`.",36],[11,"load","","Loads a value from the isize.",36],[11,"store","","Stores a value into the isize.",36],[11,"swap","","Stores a value into the isize, returning the old value.",36],[11,"compare_and_swap","","Stores a value into the isize if the current value is the same as the expected value.",36],[11,"fetch_add","","Add an isize to the current value, returning the previous value.",36],[11,"fetch_sub","","Subtract an isize from the current value, returning the previous value.",36],[11,"fetch_and","","Bitwise and with the current isize, returning the previous value.",36],[11,"fetch_or","","Bitwise or with the current isize, returning the previous value.",36],[11,"fetch_xor","","Bitwise xor with the current isize, returning the previous value.",36],[11,"new","","Creates a new `AtomicUsize`.",37],[11,"load","","Loads a value from the usize.",37],[11,"store","","Stores a value into the usize.",37],[11,"swap","","Stores a value into the usize, returning the old value.",37],[11,"compare_and_swap","","Stores a value into the usize if the current value is the same as the expected value.",37],[11,"fetch_add","","Add to the current usize, returning the previous value.",37],[11,"fetch_sub","","Subtract from the current usize, returning the previous value.",37],[11,"fetch_and","","Bitwise and with the current usize, returning the previous value.",37],[11,"fetch_or","","Bitwise or with the current usize, returning the previous value.",37],[11,"fetch_xor","","Bitwise xor with the current usize, returning the previous value.",37],[11,"new","","Creates a new `AtomicPtr`.",38],[11,"load","","Loads a value from the pointer.",38],[11,"store","","Stores a value into the pointer.",38],[11,"swap","","Stores a value into the pointer, returning the old value.",38],[11,"compare_and_swap","","Stores a value into the pointer if the current value is the same as the expected value.",38],[11,"new","","",39],[11,"load","","",39],[11,"store","","",39],[11,"swap","","",39],[11,"compare_and_swap","","",39],[11,"fetch_add","","",39],[11,"fetch_sub","","",39],[11,"fetch_and","","",39],[11,"fetch_or","","",39],[11,"fetch_xor","","",39],[11,"new","","",40],[11,"load","","",40],[11,"store","","",40],[11,"swap","","",40],[11,"compare_and_swap","","",40],[11,"fetch_add","","",40],[11,"fetch_sub","","",40],[11,"fetch_and","","",40],[11,"fetch_or","","",40],[11,"fetch_xor","","",40],[11,"into_cow","core::borrow","",41],[11,"clone","","",41],[11,"clone_from","","",41],[11,"to_mut","","Acquire a mutable reference to the owned form of the data.",41],[11,"into_owned","","Extract the owned data.",41],[11,"is_borrowed","","Returns true if this `Cow` wraps a borrowed value",41],[11,"is_owned","","Returns true if this `Cow` wraps an owned value",41],[11,"deref","","",41],[11,"assert_receiver_is_total_eq","","",41],[11,"cmp","","",41],[11,"eq","","",41],[11,"ne","","",41],[11,"partial_cmp","","",41],[11,"lt","","",41],[11,"le","","",41],[11,"gt","","",41],[11,"ge","","",41],[11,"fmt","","",41],[11,"fmt","","",41],[11,"new","core::cell","Creates a new `Cell` containing the given value.",42],[11,"get","","Returns a copy of the contained value.",42],[11,"set","","Sets the contained value.",42],[11,"as_unsafe_cell","","Get a reference to the underlying `UnsafeCell`.",42],[11,"clone","","",42],[11,"clone_from","","",42],[11,"default","","",42],[11,"eq","","",42],[11,"ne","","",42],[11,"fmt","","",43],[11,"eq","","",43],[11,"ne","","",43],[11,"ne","","",43],[11,"clone","","",43],[11,"clone_from","","",43],[11,"new","","Creates a new `RefCell` containing `value`.",44],[11,"into_inner","","Consumes the `RefCell`, returning the wrapped value.",44],[11,"borrow_state","","Query the current state of this `RefCell`",44],[11,"try_borrow","","Attempts to immutably borrow the wrapped value.",44],[11,"borrow","","Immutably borrows the wrapped value.",44],[11,"try_borrow_mut","","Mutably borrows the wrapped value.",44],[11,"borrow_mut","","Mutably borrows the wrapped value.",44],[11,"as_unsafe_cell","","Get a reference to the underlying `UnsafeCell`.",44],[11,"clone","","",44],[11,"clone_from","","",44],[11,"default","","",44],[11,"eq","","",44],[11,"ne","","",44],[11,"drop","","",45],[11,"clone","","",45],[11,"clone_from","","",45],[11,"deref","","",46],[11,"drop","","",47],[11,"deref","","",48],[11,"deref_mut","","",48],[11,"new","","Construct a new instance of `UnsafeCell` which will wrap the specified\nvalue.",49],[11,"get","","Gets a mutable pointer to the wrapped value.",49],[11,"into_inner","","Unwraps the value",49],[11,"clone","core::char","",50],[11,"clone_from","","",50],[11,"clone","","",51],[11,"clone_from","","",51],[11,"next","","",50],[11,"size_hint","","",50],[11,"clone","","",52],[11,"clone_from","","",52],[11,"clone","","",53],[11,"clone_from","","",53],[11,"next","","",52],[11,"size_hint","","",52],[11,"drop","core::finally","",54],[11,"len","core::iter","",55],[11,"len","","",56],[11,"len","","",57],[11,"len","","",58],[11,"len","","",59],[11,"clone","","",57],[11,"clone_from","","",57],[11,"next","","",57],[11,"size_hint","","",57],[11,"size_hint","","",57],[11,"next_back","","",57],[11,"indexable","","",57],[11,"idx","","",57],[11,"fmt","","",60],[11,"eq","","",60],[11,"ne","","",60],[11,"ne","","",60],[11,"clone","","",60],[11,"clone_from","","",60],[11,"into_option","","`into_option` creates an `Option` of type `(T,T)`. The returned `Option` has variant\n`None` if and only if the `MinMaxResult` has variant `NoElements`. Otherwise variant\n`Some(x,y)` is returned where `x <= y`. If `MinMaxResult` has variant `OneElement(x)`,\nperforming this operation will make one clone of `x`.",60],[11,"clone","","",61],[11,"clone_from","","",61],[11,"next","","",61],[11,"size_hint","","",61],[11,"size_hint","","",61],[11,"next_back","","",61],[11,"len","","",61],[11,"clone","","",62],[11,"clone_from","","",62],[11,"next","","",62],[11,"size_hint","","",62],[11,"size_hint","","",62],[11,"indexable","","",62],[11,"idx","","",62],[11,"clone","","",63],[11,"clone_from","","",63],[11,"next","","",63],[11,"size_hint","","",63],[11,"size_hint","","",63],[11,"next_back","","",63],[11,"indexable","","",63],[11,"idx","","",63],[11,"clone","","",59],[11,"clone_from","","",59],[11,"next","","",59],[11,"size_hint","","",59],[11,"size_hint","","",59],[11,"next_back","","",59],[11,"indexable","","",59],[11,"idx","","",59],[11,"clone","","",58],[11,"clone_from","","",58],[11,"next","","",58],[11,"size_hint","","",58],[11,"size_hint","","",58],[11,"next_back","","",58],[11,"indexable","","",58],[11,"idx","","",58],[11,"clone","","",64],[11,"clone_from","","",64],[11,"next","","",64],[11,"size_hint","","",64],[11,"size_hint","","",64],[11,"next_back","","",64],[11,"clone","","",65],[11,"clone_from","","",65],[11,"next","","",65],[11,"size_hint","","",65],[11,"size_hint","","",65],[11,"next_back","","",65],[11,"clone","","",55],[11,"clone_from","","",55],[11,"next","","",55],[11,"size_hint","","",55],[11,"size_hint","","",55],[11,"next_back","","",55],[11,"indexable","","",55],[11,"idx","","",55],[11,"clone","","",66],[11,"clone_from","","",66],[11,"next","","",66],[11,"size_hint","","",66],[11,"size_hint","","",66],[11,"len","","",66],[11,"peek","","Return a reference to the next element of the iterator with out\nadvancing it, or None if the iterator is exhausted.",66],[11,"is_empty","","Check whether peekable iterator is empty or not.",66],[11,"clone","","",67],[11,"clone_from","","",67],[11,"next","","",67],[11,"size_hint","","",67],[11,"size_hint","","",67],[11,"clone","","",68],[11,"clone_from","","",68],[11,"next","","",68],[11,"size_hint","","",68],[11,"size_hint","","",68],[11,"clone","","",69],[11,"clone_from","","",69],[11,"next","","",69],[11,"size_hint","","",69],[11,"size_hint","","",69],[11,"indexable","","",69],[11,"idx","","",69],[11,"len","","",69],[11,"clone","","",70],[11,"clone_from","","",70],[11,"next","","",70],[11,"size_hint","","",70],[11,"size_hint","","",70],[11,"indexable","","",70],[11,"idx","","",70],[11,"len","","",70],[11,"clone","","",71],[11,"clone_from","","",71],[11,"next","","",71],[11,"size_hint","","",71],[11,"size_hint","","",71],[11,"clone","","",72],[11,"clone_from","","",72],[11,"next","","",72],[11,"size_hint","","",72],[11,"size_hint","","",72],[11,"next_back","","",72],[11,"clone","","",73],[11,"clone_from","","",73],[11,"next","","",73],[11,"size_hint","","",73],[11,"size_hint","","",73],[11,"next_back","","",73],[11,"indexable","","",73],[11,"idx","","",73],[11,"len","","",73],[11,"reset_fuse","","Resets the fuse such that the next call to .next() or .next_back() will\ncall the underlying iterator again even if it previously returned None.",73],[11,"clone","","",56],[11,"clone_from","","",56],[11,"next","","",56],[11,"size_hint","","",56],[11,"size_hint","","",56],[11,"next_back","","",56],[11,"indexable","","",56],[11,"idx","","",56],[11,"clone","","",74],[11,"clone_from","","",74],[11,"new","","Creates a new iterator with the specified closure as the \"iterator\nfunction\" and an initial state to eventually pass to the closure",74],[11,"next","","",74],[11,"size_hint","","",74],[11,"size_hint","","",74],[11,"clone","","",75],[11,"clone_from","","",75],[11,"next","","",75],[11,"size_hint","","",75],[11,"size_hint","","",75],[11,"clone","","",76],[11,"clone_from","","",76],[11,"next","","",76],[11,"size_hint","","",76],[11,"size_hint","","",76],[11,"next_back","","",76],[11,"clone","","",77],[11,"clone_from","","",77],[11,"next","","",77],[11,"size_hint","","",77],[11,"size_hint","","",77],[11,"next_back","","",77],[11,"clone","","",78],[11,"clone_from","","",78],[11,"next","","",78],[11,"size_hint","","",78],[11,"clone","","",79],[11,"clone_from","","",79],[11,"next","","",79],[11,"size_hint","","",79],[11,"next","core::ops","",29],[11,"size_hint","","",29],[11,"size_hint","","",29],[11,"len","","",29],[11,"len","","",29],[11,"len","","",29],[11,"len","","",29],[11,"len","","",29],[11,"len","","",29],[11,"len","","",29],[11,"len","","",29],[11,"len","","",29],[11,"len","","",29],[11,"next_back","","",29],[11,"next","","",30],[11,"size_hint","","",30],[11,"clone","core::iter","",80],[11,"clone_from","","",80],[11,"next","","",80],[11,"size_hint","","",80],[11,"size_hint","","",80],[11,"next_back","","",80],[11,"indexable","","",80],[11,"idx","","",80],[11,"hash","core::option","",81],[11,"fmt","","",81],[11,"cmp","","",81],[11,"assert_receiver_is_total_eq","","",81],[11,"partial_cmp","","",81],[11,"lt","","",81],[11,"le","","",81],[11,"gt","","",81],[11,"ge","","",81],[11,"lt","","",81],[11,"le","","",81],[11,"gt","","",81],[11,"ge","","",81],[11,"eq","","",81],[11,"ne","","",81],[11,"ne","","",81],[11,"clone","","",81],[11,"clone_from","","",81],[11,"is_some","","Returns `true` if the option is a `Some` value",81],[11,"is_none","","Returns `true` if the option is a `None` value",81],[11,"as_ref","","Convert from `Option<T>` to `Option<&T>`",81],[11,"as_mut","","Convert from `Option<T>` to `Option<&mut T>`",81],[11,"as_mut_slice","","Convert from `Option<T>` to `&mut [T]` (without copying)",81],[11,"expect","","Unwraps an option, yielding the content of a `Some`",81],[11,"unwrap","","Returns the inner `T` of a `Some(T)`.",81],[11,"unwrap_or","","Returns the contained value or a default.",81],[11,"unwrap_or_else","","Returns the contained value or computes it from a closure.",81],[11,"map","","Maps an `Option<T>` to `Option<U>` by applying a function to a contained value",81],[11,"map_or","","Applies a function to the contained value or returns a default.",81],[11,"map_or_else","","Applies a function to the contained value or computes a default.",81],[11,"ok_or","","Transforms the `Option<T>` into a `Result<T, E>`, mapping `Some(v)` to\n`Ok(v)` and `None` to `Err(err)`.",81],[11,"ok_or_else","","Transforms the `Option<T>` into a `Result<T, E>`, mapping `Some(v)` to\n`Ok(v)` and `None` to `Err(err())`.",81],[11,"iter","","Returns an iterator over the possibly contained value.",81],[11,"iter_mut","","Returns a mutable iterator over the possibly contained value.",81],[11,"into_iter","","Returns a consuming iterator over the possibly contained value.",81],[11,"and","","Returns `None` if the option is `None`, otherwise returns `optb`.",81],[11,"and_then","","Returns `None` if the option is `None`, otherwise calls `f` with the\nwrapped value and returns the result.",81],[11,"or","","Returns the option if it contains a value, otherwise returns `optb`.",81],[11,"or_else","","Returns the option if it contains a value, otherwise calls `f` and\nreturns the result.",81],[11,"take","","Takes the value out of the option, leaving a `None` in its place.",81],[11,"cloned","","Maps an Option<D> to an Option<T> by dereffing and cloning the contents of the Option.\nUseful for converting an Option<&T> to an Option<T>.",81],[11,"unwrap_or_default","","Returns the contained value or a default",81],[11,"as_slice","","Convert from `Option<T>` to `&[T]` (without copying)",81],[11,"default","","",81],[11,"clone","","",82],[11,"clone_from","","",82],[11,"next","","",82],[11,"size_hint","","",82],[11,"size_hint","","",82],[11,"next_back","","",82],[11,"len","","",82],[11,"next","","",83],[11,"size_hint","","",83],[11,"size_hint","","",83],[11,"next_back","","",83],[11,"len","","",83],[11,"clone","","",83],[11,"clone_from","","",83],[11,"next","","",84],[11,"size_hint","","",84],[11,"size_hint","","",84],[11,"next_back","","",84],[11,"len","","",84],[11,"next","","",85],[11,"size_hint","","",85],[11,"size_hint","","",85],[11,"next_back","","",85],[11,"len","","",85],[11,"from_iter","","Takes each element in the `Iterator`: if it is `None`, no further\nelements are taken, and the `None` is returned. Should no `None` occur, a\ncontainer with the values of each `Option` is returned.",81],[11,"hash","core::result","",86],[11,"fmt","","",86],[11,"cmp","","",86],[11,"assert_receiver_is_total_eq","","",86],[11,"partial_cmp","","",86],[11,"lt","","",86],[11,"le","","",86],[11,"gt","","",86],[11,"ge","","",86],[11,"lt","","",86],[11,"le","","",86],[11,"gt","","",86],[11,"ge","","",86],[11,"eq","","",86],[11,"ne","","",86],[11,"ne","","",86],[11,"clone","","",86],[11,"clone_from","","",86],[11,"is_ok","","Returns true if the result is `Ok`",86],[11,"is_err","","Returns true if the result is `Err`",86],[11,"ok","","Convert from `Result<T, E>` to `Option<T>`",86],[11,"err","","Convert from `Result<T, E>` to `Option<E>`",86],[11,"as_ref","","Convert from `Result<T, E>` to `Result<&T, &E>`",86],[11,"as_mut","","Convert from `Result<T, E>` to `Result<&mut T, &mut E>`",86],[11,"as_mut_slice","","Convert from `Result<T, E>` to `&mut [T]` (without copying)",86],[11,"map","","Maps a `Result<T, E>` to `Result<U, E>` by applying a function to an\ncontained `Ok` value, leaving an `Err` value untouched.",86],[11,"map_err","","Maps a `Result<T, E>` to `Result<T, F>` by applying a function to an\ncontained `Err` value, leaving an `Ok` value untouched.",86],[11,"iter","","Returns an iterator over the possibly contained value.",86],[11,"iter_mut","","Returns a mutable iterator over the possibly contained value.",86],[11,"into_iter","","Returns a consuming iterator over the possibly contained value.",86],[11,"and","","Returns `res` if the result is `Ok`, otherwise returns the `Err` value of `self`.",86],[11,"and_then","","Calls `op` if the result is `Ok`, otherwise returns the `Err` value of `self`.",86],[11,"or","","Returns `res` if the result is `Err`, otherwise returns the `Ok` value of `self`.",86],[11,"or_else","","Calls `op` if the result is `Err`, otherwise returns the `Ok` value of `self`.",86],[11,"unwrap_or","","Unwraps a result, yielding the content of an `Ok`.\nElse it returns `optb`.",86],[11,"unwrap_or_else","","Unwraps a result, yielding the content of an `Ok`.\nIf the value is an `Err` then it calls `op` with its value.",86],[11,"unwrap","","Unwraps a result, yielding the content of an `Ok`.",86],[11,"unwrap_err","","Unwraps a result, yielding the content of an `Err`.",86],[11,"as_slice","","Convert from `Result<T, E>` to `&[T]` (without copying)",86],[11,"next","","",87],[11,"size_hint","","",87],[11,"size_hint","","",87],[11,"next_back","","",87],[11,"len","","",87],[11,"clone","","",87],[11,"clone_from","","",87],[11,"next","","",88],[11,"size_hint","","",88],[11,"size_hint","","",88],[11,"next_back","","",88],[11,"len","","",88],[11,"next","","",89],[11,"size_hint","","",89],[11,"size_hint","","",89],[11,"next_back","","",89],[11,"len","","",89],[11,"from_iter","","Takes each element in the `Iterator`: if it is an `Err`, no further\nelements are taken, and the `Err` is returned. Should no `Err` occur, a\ncontainer with the values of each `Result` is returned.",86],[11,"fmt","core::simd","",90],[11,"fmt","","",91],[11,"fmt","","",92],[11,"fmt","","",93],[11,"fmt","","",94],[11,"fmt","","",95],[11,"fmt","","",96],[11,"fmt","","",97],[11,"fmt","","",98],[11,"fmt","","",99],[11,"index","core::slice","",100],[11,"index","","",100],[11,"index","","",100],[11,"index","","",100],[11,"as_slice","","View the underlying data as a subslice of the original data.",100],[11,"next","","",100],[11,"size_hint","","",100],[11,"size_hint","","",100],[11,"next_back","","",100],[11,"len","","",100],[11,"clone","","",100],[11,"clone_from","","",100],[11,"indexable","","",100],[11,"idx","","",100],[11,"index","","",101],[11,"index","","",101],[11,"index","","",101],[11,"index","","",101],[11,"index_mut","","",101],[11,"index_mut","","",101],[11,"index_mut","","",101],[11,"index_mut","","",101],[11,"into_slice","","View the underlying data as a subslice of the original data.",101],[11,"next","","",101],[11,"size_hint","","",101],[11,"size_hint","","",101],[11,"next_back","","",101],[11,"len","","",101],[11,"clone","","",102],[11,"clone_from","","",102],[11,"next","","",102],[11,"size_hint","","",102],[11,"size_hint","","",102],[11,"next_back","","",102],[11,"finish","","",102],[11,"finish","","",103],[11,"next","","",103],[11,"size_hint","","",103],[11,"size_hint","","",103],[11,"next_back","","",103],[11,"next","","",104],[11,"size_hint","","",104],[11,"size_hint","","",104],[11,"next","","",105],[11,"size_hint","","",105],[11,"size_hint","","",105],[11,"next","","",106],[11,"size_hint","","",106],[11,"size_hint","","",106],[11,"next","","",107],[11,"size_hint","","",107],[11,"size_hint","","",107],[11,"next","","",108],[11,"size_hint","","",108],[11,"size_hint","","",108],[11,"clone","","",109],[11,"clone_from","","",109],[11,"next","","",109],[11,"size_hint","","",109],[11,"size_hint","","",109],[11,"clone","","",110],[11,"clone_from","","",110],[11,"next","","",110],[11,"size_hint","","",110],[11,"size_hint","","",110],[11,"next_back","","",110],[11,"len","","",110],[11,"indexable","","",110],[11,"idx","","",110],[11,"next","","",111],[11,"size_hint","","",111],[11,"size_hint","","",111],[11,"next_back","","",111],[11,"len","","",111],[11,"eq","core::str","",112],[11,"ne","","",112],[11,"ne","","",112],[11,"clone","","",112],[11,"clone_from","","",112],[11,"fmt","","",112],[11,"fmt","","",112],[11,"description","","",112],[11,"cause","","",112],[11,"fmt","","",113],[11,"clone","","",113],[11,"clone_from","","",113],[11,"eq","","",113],[11,"ne","","",113],[11,"ne","","",113],[11,"assert_receiver_is_total_eq","","",113],[11,"description","","",113],[11,"cause","","",113],[11,"fmt","","",113],[11,"clone","","",114],[11,"clone_from","","",114],[11,"next","","",114],[11,"size_hint","","",114],[11,"size_hint","","",114],[11,"next_back","","",114],[11,"clone","","",115],[11,"clone_from","","",115],[11,"next","","",115],[11,"size_hint","","",115],[11,"size_hint","","",115],[11,"next_back","","",115],[11,"clone","","",116],[11,"clone_from","","",116],[11,"next","","",116],[11,"size_hint","","",116],[11,"size_hint","","",116],[11,"next_back","","",116],[11,"len","","",116],[11,"len","","",116],[11,"clone","","",117],[11,"clone_from","","",117],[11,"call","","",117],[11,"clone","","",118],[11,"clone_from","","",118],[11,"clone","","",119],[11,"clone_from","","",119],[11,"next","","",118],[11,"size_hint","","",118],[11,"next_back","","",118],[11,"next","","",119],[11,"size_hint","","",119],[11,"clone","","",120],[11,"clone_from","","",120],[11,"clone","","",121],[11,"clone_from","","",121],[11,"clone","","",122],[11,"clone_from","","",122],[11,"clone","","",123],[11,"clone_from","","",123],[11,"clone","","",124],[11,"clone_from","","",124],[11,"next","","",123],[11,"size_hint","","",123],[11,"next","","",124],[11,"size_hint","","",124],[11,"clone","","",125],[11,"clone_from","","",125],[11,"next","","",125],[11,"size_hint","","",125],[11,"size_hint","","",125],[11,"next_back","","",125],[11,"clone","","",126],[11,"clone_from","","",126],[11,"next","","",126],[11,"size_hint","","",126],[11,"size_hint","","",126],[11,"next_back","","",126],[11,"clone","","",127],[11,"clone_from","","",127],[11,"next","","",127],[11,"size_hint","","",127],[11,"size_hint","","",127],[11,"clone","","",128],[11,"clone_from","","",128],[11,"next","","",128],[11,"size_hint","","",128],[11,"size_hint","","",128],[11,"next","","",129],[11,"size_hint","","",129],[11,"size_hint","","",129],[11,"next_back","","",129],[11,"next","","",130],[11,"size_hint","","",130],[11,"size_hint","","",130],[11,"next_back","","",130],[11,"new","core::hash::sip","Creates a new `SipHasher` with the two initial keys set to 0.",131],[11,"new_with_keys","","Creates a `SipHasher` that is keyed off the provided keys.",131],[11,"result","","Returns the computed hash.",131],[11,"write","","",131],[11,"reset","","",131],[11,"finish","","",131],[11,"clone","","",131],[11,"clone_from","","",131],[11,"default","","",131],[11,"hash","core::borrow","",41],[11,"eq","core::fmt::num","",132],[11,"ne","","",132],[11,"ne","","",132],[11,"clone","","",132],[11,"clone_from","","",132],[11,"eq","","",133],[11,"ne","","",133],[11,"ne","","",133],[11,"clone","","",133],[11,"clone_from","","",133],[11,"eq","","",134],[11,"ne","","",134],[11,"ne","","",134],[11,"clone","","",134],[11,"clone_from","","",134],[11,"eq","","",135],[11,"ne","","",135],[11,"ne","","",135],[11,"clone","","",135],[11,"clone_from","","",135],[11,"eq","","",136],[11,"ne","","",136],[11,"ne","","",136],[11,"clone","","",136],[11,"clone_from","","",136],[11,"eq","","",137],[11,"ne","","",137],[11,"ne","","",137],[11,"clone","","",137],[11,"clone_from","","",137],[11,"fmt","","",138],[11,"fmt","","",138],[11,"fmt","","",138],[11,"fmt","","",138],[11,"fmt","","",138],[11,"fmt","","",138],[11,"fmt","","",138],[11,"fmt","","",138],[11,"fmt","","",138],[11,"fmt","","",138],[11,"fmt","","",138],[11,"fmt","","",138],[11,"fmt","","",138],[11,"fmt","","",138],[11,"fmt","","",138],[11,"fmt","","",138],[11,"fmt","","",138],[11,"fmt","","",138],[11,"fmt","","",138],[11,"fmt","","",138],[11,"eq","core::fmt::rt::v1","",139],[11,"ne","","",139],[11,"ne","","",139],[11,"fmt","core::fmt","",140],[11,"fmt","","",141],[11,"fmt","","",141],[11,"pad_integral","","Performs the correct padding for an integer which has already been\nemitted into a str. The str should *not* contain the sign for the\ninteger, that will be added by this method.",142],[11,"pad","","This function takes a string slice and emits it to the internal buffer\nafter applying the relevant formatting flags specified. The flags\nrecognized for generic strings are:",142],[11,"write_str","","Writes some data to the underlying buffer contained within this\nformatter.",142],[11,"write_fmt","","Writes some formatted information into this instance",142],[11,"flags","","Flags for formatting (packed version of rt::Flag)",142],[11,"fill","","Character used as 'fill' whenever there is alignment",142],[11,"align","","Flag indicating what form of alignment was requested",142],[11,"width","","Optionally specified integer width that the output should be",142],[11,"precision","","Optionally specified precision for numeric types",142],[11,"fmt","","",140],[11,"fmt","core::cell","",42],[11,"fmt","","",44],[11,"fmt","","",46],[11,"fmt","","",48]],"paths":[[8,"PhfHash"],[3,"Map"],[3,"Entries"],[3,"Keys"],[3,"Values"],[3,"Set"],[3,"Iter"],[3,"OrderedMap"],[3,"Entries"],[3,"Keys"],[3,"Values"],[3,"OrderedSet"],[3,"Iter"],[4,"FpCategory"],[3,"ParseIntError"],[4,"IntErrorKind"],[3,"ParseFloatError"],[4,"FloatErrorKind"],[3,"NonZero"],[3,"Unique"],[3,"CovariantType"],[3,"ContravariantType"],[3,"InvariantType"],[3,"CovariantLifetime"],[3,"ContravariantLifetime"],[3,"InvariantLifetime"],[3,"NoCopy"],[3,"Managed"],[3,"RangeFull"],[3,"Range"],[3,"RangeFrom"],[3,"RangeTo"],[4,"Ordering"],[8,"Any"],[3,"TypeId"],[3,"AtomicBool"],[3,"AtomicIsize"],[3,"AtomicUsize"],[3,"AtomicPtr"],[3,"AtomicInt"],[3,"AtomicUint"],[4,"Cow"],[3,"Cell"],[4,"BorrowState"],[3,"RefCell"],[3,"BorrowRef"],[3,"Ref"],[3,"BorrowRefMut"],[3,"RefMut"],[3,"UnsafeCell"],[3,"EscapeUnicode"],[4,"EscapeUnicodeState"],[3,"EscapeDefault"],[4,"EscapeDefaultState"],[3,"Finallyalizer"],[3,"Enumerate"],[3,"Inspect"],[3,"Rev"],[3,"Map"],[3,"Zip"],[4,"MinMaxResult"],[3,"Cloned"],[3,"Cycle"],[3,"Chain"],[3,"Filter"],[3,"FilterMap"],[3,"Peekable"],[3,"SkipWhile"],[3,"TakeWhile"],[3,"Skip"],[3,"Take"],[3,"Scan"],[3,"FlatMap"],[3,"Fuse"],[3,"Unfold"],[3,"Counter"],[3,"Range"],[3,"RangeInclusive"],[3,"RangeStep"],[3,"RangeStepInclusive"],[3,"Repeat"],[4,"Option"],[3,"Item"],[3,"Iter"],[3,"IterMut"],[3,"IntoIter"],[4,"Result"],[3,"Iter"],[3,"IterMut"],[3,"IntoIter"],[3,"i8x16"],[3,"i16x8"],[3,"i32x4"],[3,"i64x2"],[3,"u8x16"],[3,"u16x8"],[3,"u32x4"],[3,"u64x2"],[3,"f32x4"],[3,"f64x2"],[3,"Iter"],[3,"IterMut"],[3,"Split"],[3,"SplitMut"],[3,"GenericSplitN"],[3,"SplitN"],[3,"RSplitN"],[3,"SplitNMut"],[3,"RSplitNMut"],[3,"Windows"],[3,"Chunks"],[3,"ChunksMut"],[3,"ParseBoolError"],[4,"Utf8Error"],[3,"Chars"],[3,"CharIndices"],[3,"Bytes"],[3,"BytesDeref"],[3,"CharSplits"],[3,"CharSplitsN"],[3,"NaiveSearcher"],[3,"TwoWaySearcher"],[4,"Searcher"],[3,"MatchIndices"],[3,"SplitStr"],[3,"Split"],[3,"SplitTerminator"],[3,"SplitN"],[3,"RSplitN"],[3,"Lines"],[3,"LinesAny"],[3,"SipHasher"],[3,"Binary"],[3,"Octal"],[3,"Decimal"],[3,"LowerHex"],[3,"UpperHex"],[3,"Radix"],[3,"RadixFmt"],[4,"Alignment"],[3,"Error"],[3,"Arguments"],[3,"Formatter"]]};
searchIndex['phf_macros'] = {"items":[[0,"","phf_macros","Compiler plugin for Rust-PHF"],[0,"util","",""],[3,"Entry","phf_macros::util",""],[12,"key_contents","","",0],[12,"key","","",0],[12,"value","","",0],[3,"HashState","",""],[4,"Key","",""],[13,"Str","","",1],[13,"Binary","","",1],[13,"Char","","",1],[13,"U8","","",1],[13,"I8","","",1],[13,"U16","","",1],[13,"I16","","",1],[13,"U32","","",1],[13,"I32","","",1],[13,"U64","","",1],[13,"I64","","",1],[13,"Bool","","",1],[5,"generate_hash","",""],[5,"try_generate_hash","",""],[5,"create_map","",""],[5,"create_set","",""],[5,"create_ordered_map","",""],[5,"create_ordered_set","",""],[11,"clone","","",1],[11,"eq","","",1],[11,"ne","","",1],[11,"hash","","",1],[11,"phf_hash","","",1]],"paths":[[3,"Entry"],[4,"Key"]]};

searchIndex['phf_shared'] = {"items":[[0,"","phf_shared",""],[5,"displace","",""],[8,"PhfHash","","A trait implemented by types which can be used in PHF data structures"],[10,"phf_hash","","Hashes the value of `self`, factoring in a seed",0]],"paths":[[8,"PhfHash"]]};

initSearch(searchIndex);