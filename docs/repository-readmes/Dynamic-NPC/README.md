# Dynamic NPC

A VR dissertation prototype investigating physics-driven NPC reactions to touch and physical interaction in Unreal Engine. It is a research project rather than a production-ready NPC package.

![Dynamic NPC interaction demo](https://foshhyd.github.io/images/DNPC1.png)

## Technical overview

- Unreal Engine 5.5 project, stored in `TestVR/`.
- OpenXR, OpenXR Eye Tracker and OpenXR Hand Tracking plugins enabled in `TestVR.uproject`.
- Blueprint and level assets for testing NPC interactions.
- Example levels in `TestVR/Content/Levels/`: `DemoScene`, `BoxScene` and `ShootNPCScene`.

The public snapshot contains Blueprint/content assets and configuration; it does not include a native C++ source module. The engine association and plugin list are recorded in `TestVR/TestVR.uproject`.

## Open the project

1. Clone or download this repository.
2. Open `TestVR/TestVR.uproject` in Unreal Engine 5.5.
3. Open `Content/Levels/DemoScene` in the Content Browser. The configured default map is the VR template map, so the demonstration level must be selected manually.
4. For VR Preview, connect compatible hardware and configure its OpenXR runtime before starting the preview.

These instructions follow the checked-in project configuration. A fresh-clone run, exact headset compatibility and packaged builds have not been verified for this README.

## Research context

[Dissertation report](https://foshhyd.github.io/images/Dis_Project_Report.pdf) · [Portfolio project page](https://foshhyd.github.io/VRProjects.html#selected-project)

No user-study results, latency figures or production deployment outcomes are claimed here. The report provides the fuller methodology and project limitations.

## Licence

See the repository's `LICENSE` file for its MIT licence. Third-party assets and dependencies remain subject to their own terms.
