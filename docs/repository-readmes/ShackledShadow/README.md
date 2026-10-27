# Shackled Shadow

A desktop platformer prototype built with C# and MonoGame, exploring world switching, platforming and enemy behaviour. This is an academic game project, presented as a prototype.

![Shackled Shadow gameplay](https://foshhyd.github.io/images/CGA1.png)

## Technical overview

- C# on .NET 6, using MonoGame DesktopGL 3.8.1.303.
- Game states for menus, gameplay and high scores.
- Finite-state enemy behaviour, player movement, combat and healing.
- Text-file level layouts and a MonoGame content pipeline.

The project is in `ShackledShadow/`; `States/GameState.cs` defines the gameplay input bindings, and `Content/Levels/` contains the level layouts.

## Run locally

Use the original .NET 6-compatible toolchain and the graphics/audio dependencies required by MonoGame DesktopGL on your operating system. From the repository root:

```sh
cd ShackledShadow
dotnet tool restore
dotnet restore
dotnet run --project ShackledShadow.csproj
```

The repository pins the MGCB content tools in `.config/dotnet-tools.json`. These instructions are derived from the checked-in project configuration; a clean-machine build has not been verified for this README.

## Controls

| Key | Gameplay action |
| --- | --- |
| A / D | Move left / right |
| W | Jump |
| Left Shift | Switch level/world |
| E | Attack |
| Q | Heal |
| Escape | Stop the game |

## Scope and credits

This repository is a prototype, with no claimed production release or measured performance results. Existing framework/sample code and third-party assets retain their respective authorship and terms; this README does not assign a new licence to them.

[Portfolio and project context](https://foshhyd.github.io/games.html)
