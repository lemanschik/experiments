# fs
A Filesystem Implementation as Component it is designed to get passed as Object that represents a handle to it. The handle Abstraction gets used to implement the
concept of a Capability based Component Model which allows u to interop with components later via RPC Handels like CAP'n.

## Usage
At the core we use a key value storage implemented as so called heap structure a btree as a reference can go throug multiple stages until
everything hits the finaly storage location each file gets a UUID on creation this UUID is not based on the content it is a flat structure of UUID's

but split the RRS how we call them in future have a schema we use internal :: as delimiter for the UUID protocol used to create the UUID.
```
RRS::sha256::UUID link
sha256::UUID content hash indexed content using sha256
volume::UUID 
dag::UUID used to build dag graph representations of volumes or partial volumes enables p2p filesharing via content addressing. using eg: sha256::UUID references
```
RRS:: is a special case Resolveable Resource Specifiers are without content they store only a referencingId which can by it self via its ID protocol indicate what type that is. they are implementing the concept of injectable hardlinks or overrides.
They should not get used often internal you should always prefer to build a index or collection of the Object Storage Objects that you want to
combine into a volume or filesystem.

they can ideal be used to incremental update the state of a object that holds content like a document tracked by the content/tracker component the tracker component can place incremental artifacts represented as RSS::sha256::UUID for the final content that is maybe stored else where and can store a references to the real content under: sha256::UUID
