# loader
Loaders and a common loader for modules authored in diffrent ECMAScript syntaxes and or Environments.
Mainly offers compatablity to load code with the ability to modify it while loading handels linking
while loading. 

should not get confues with host/loader which is a host specific loader method to load nativ code
this is mainly there as a integration incremental migration helper to modify code without rewriting
the source so in memory only which allows you to take existing code and run a modifyed version of it
without write access. 
