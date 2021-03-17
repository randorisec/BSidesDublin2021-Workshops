# BSidesDublin2021-Workshops

## About

During the [BSides Dublin 2021 event](https://www.bsidesdub.ie/schedule.php), RandoriSec delivered 2 workshops:

* [Android Mobile Hacking Workshop](/Android)
* [iOS Mobile Hacking Workshop](/iOS)

This repository contains the materials used during the workshops.

If you want to follow those workshops, you need to use a Virtual Machine (or a physical one!) containing at least the following tools:

* Android Studio
* apktool
* JADX
* Ghidra
* Objection
* Frida

## Prerequisites

For the attendees of BSides Dublin, you have to perform the following actions **BEFORE** the workshop:

### 1. Install VMWare Player(**DO NOT USE VirtualBox!!**)

For PC users, you can use the free version of VMWare Player (or VMWare Workstation if you have a valid license key):

* [VMWare Player](https://www.vmware.com/products/workstation-player/workstation-player-evaluation.html)

For Mac users, you should use VMWare Fusion:

* [VMWare Fusion](https://www.vmware.com/products/fusion/fusion-evaluation.html)

### 2. Download **Mobexler** virtual machine (credentials: Mobexler/12345)

* https://mobexler.com/download.htm

### 3. Import the OVA file with VMware

If an error message appears saying the OVA file didn't pass the OVF specifications, please click `Retry`. It should work :)

### 4. Enable "Virtualize Intel VT-x/EPT or AMD-V/RVI"

After the import of the OVA file, you have to edit the Virtual Machine hardware settings of the Mobexler machine in order to enable **Virtualize Intel VT-x/EPT or AMD-V/RVI**.

### 5. Enable KVM permission for Mobexler user

Boot the virtual machine and then you need to execute the following commands:

```terminal
sudo apt update
sudo apt install qemu-kvm
sudo adduser Mobexler kvm
reboot
```

We also recommend to install the VMWare tools:

```terminal
sudo apt install open-vm-tools-desktop
```

Do NOT forget to reboot the virtual machine before going to the next step.

### 6. Create an Android Virtual Device with Android Studio

**DO NOT LAUNCH Android Studio with the GUI but instead with the terminal**. The Android Studio program needs to be executed with Mobexler privileges.
Here is the command to execute:

```terminal
/usr/local/android-studio/bin/studio.sh
```

Then, you can create an Android emulator with the `AVD Manager`. For this workshop, you need to select the following options for your emulator:

* Hardware: Nexus 5X
* System image
  * Release name: Nougat
  * API Level: 21
  * ABI: x86_64
  * Target: Android 7.1.1 (Google APIs)
* Name: Nougat

If you need more details about the different steps, you can consult this blogpost: [Setting-up Mobexler with VMWare and Android Studio](https://www.randorisec.fr/setting-up-mobexler-vmware-android-studio/).