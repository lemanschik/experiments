# components/manager/macos components::manager/macos


## Fundamentals
Running binary as ELF under macos reversing the control flow via the Automator Task Scheduler Integration.

### Internals about ELF MacOS
Based on this [article](https://linux-audit.com/elf-binaries-on-linux-understanding-and-analysis), and this sentence:
A common misconception is that ELF files are just for executables... We already have seen they can be used for partial pieces ... so Not all ELF files will be executed, even if you have a proper setup.

Based on this [article](https://icculus.org/fatelf/), there is a group pf ELF files called FatELF:

- see: [page from Apple](https://developer.apple.com/library/content/documentation/Darwin/Conceptual/KernelProgramming/BSD/BSD.html) - The BSD portion of the OS X kernel is derived primarily from FreeBSD So, FatELF is the "working".
  - FatELF is a file format that embeds multiple ELF binaries for different architectures into one file  
  - Ship one file that works across Linux and FreeBSD

- [Object file converter](http://agner.org/optimize/#objconv) - This utility can be used for converting object files between COFF/PE, OMF, **ELF** and Mach-O formats for all 32-bit and 64-bit x86 platforms. **Can modify symbol names in object files. Can build, modify and convert function libraries across platforms**. Can dump object files and executable files. Also includes a very good disassembler supporting the SSE4, AVX, AVX2, AVX512, FMA3, FMA4, XOP and Knights Corner instruction sets. Source code included (GPL).

- [page about XBinary](http://web.archive.org/web/20200513034604/http://www.osxbook.com/software/xbinary/) - This document discusses XBinary, a new software that lets you add kernel-level support for executing files in arbitrary binary formats on Mac OS X
